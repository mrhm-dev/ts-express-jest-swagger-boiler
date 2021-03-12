import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import path from 'path';

import { useMorgan } from './middlewares';
import { useSwagger } from './swagger';
import { RegisterRoutes } from './routes/routes';
// import { AppError, globalErrorHandler } from './errors';
import { globalErrorHandler } from './errors';

const app: Application = express();
app.enable('trust proxy');

app.use(cors());
app.use(compression());

// rate Limiter
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Request logging using Morgan
const logBasePath = path.resolve('logs');
useMorgan(app, logBasePath);

// Setup Swagger
useSwagger(app);

// Register Routers
RegisterRoutes(app);

app.get('/', (req: Request, res: Response) => {
    console.log(req.url);
    return res.status(200).json({ msg: 'Hello World' });
});

// 404 error handling
app.use((req: Request, res: Response) => {
    // const error = new AppError(
    // 	`Can't find ${req.originalUrl} on this server!`,
    // 	404
    // );
    // next(error);
    return res
        .status(404)
        .json({ msg: '404 Not Found', path: req.originalUrl });
});

app.use(globalErrorHandler);

export default app;
