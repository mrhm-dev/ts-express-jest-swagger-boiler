import mongoose from 'mongoose';
import Logger from '../utils/logger';

export function connectDB(databaseURL: string): void {
    mongoose
        .connect(databaseURL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 1000,
        })
        .then(() => {
            Logger.info('Database Connected');
        })
        .catch((e) => {
            console.log(e);
            Logger.error(e.message);
        });

    const connection = mongoose.connection;
    connection.on('connected', () => {
        Logger.info('Database Connected Successfully');
    });
    connection.on('disconnected', () => {
        Logger.info('Database Disconnected');
    });
    connection.on('error', (err) => {
        console.log(err);
        Logger.error(`Database Error Occurred: ${err.message}`);
    });
    connection.on('close', () => {
        Logger.info('Database Closed Successfully');
    });
}
