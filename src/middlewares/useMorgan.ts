import morgan from 'morgan';
import { Response, Application } from 'express';
import { createStream } from 'rotating-file-stream';

const useMorgan = (app: Application, logBasePath: string) => {
    const format = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
    const logRotateOptions = {
        interval: '3d',
        path: logBasePath,
    };

    // log 200 & 300 requests to console as STDOUT
    const accessLog = createStream('access.log', logRotateOptions);
    app.use(
        morgan(format, {
            skip: (_, res: Response) => res.statusCode >= 400,
            stream: accessLog,
        }),
    );

    // log 400 & 500 errors to console as STDERR
    const accessErrorsLog = createStream('access-errors.log', logRotateOptions);
    app.use(
        morgan(format, {
            skip: (_, res: Response) => res.statusCode < 400,
            stream: accessErrorsLog,
        }),
    );

    // Log all request to console
    app.use(morgan('dev'));
};

export default useMorgan;
