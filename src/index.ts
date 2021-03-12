import http from 'http';
import dotenv from 'dotenv';
import chalk from 'chalk';
import app from './app';
import { connectDB } from './database';

dotenv.config();

const server = new http.Server(app);

const port = process.env.PORT || 4000;
server.listen(port, () => {
    connectDB(process.env.DATABASE_STRING || 'mongodb://localhost:27017/dummy');
    console.log(
        chalk.green('Server is Running on PORT ='),
        chalk.bgGreen(port),
    );
});

// Handle Rejections
process.on('uncaughtException', (err) => {
    console.log(chalk.red('UNCAUGHT_EXCEPTION, Shutting Down...'));
    console.log(chalk.bgRed(err.name), err.message);
    process.exit(1);
});

process.on('unhandledRejection', () => {
    console.log(chalk.red('UNCAUGHT_REJECTION, Shutting Down...'));
    server.close(() => {
        process.exit(1);
    });
});
