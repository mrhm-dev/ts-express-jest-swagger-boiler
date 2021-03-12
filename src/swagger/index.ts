import { Application } from 'express';
import swaggerUI from 'swagger-ui-express';

export function useSwagger(app: Application): void {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const swaggerSpec = require('../../swagger.json');
        app.use(
            '/api/v1/docs',
            swaggerUI.serve,
            swaggerUI.setup(swaggerSpec, { explorer: true }),
        );
    } catch (err) {
        console.log('Unable to load swagger', err);
    }
}
