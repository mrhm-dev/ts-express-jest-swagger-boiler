import { Request, Response } from 'express';
import AppError from './appError';
/**
 * @name handleCastErrorDB
 * @param {any} err
 */
const handleCastErrorDB = (err: any) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
};

/**
 * @name handleDuplicateFieldsDB
 * @param {any} err
 */
const handleDuplicateFieldsDB = (err: any) => {
    const value = err.message.match(/(["'])(\\?.)*?\1/)[0];

    const message = `Duplicate field value: ${value}.`;
    return new AppError(message, 400);
};

/**
 * @name handleValidationErrorDB
 * @param {any} err
 */
const handleValidationErrorDB = (err: any) => {
    const errors = Object.values(err.errors).map((el: any) => el.message);

    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
};

/**
 * @name handleJWTError
 */
const handleJWTError = () => new AppError('Unauthorized', 401);

/**
 * @name handleJWTExpiredError
 */
const handleJWTExpiredError = () =>
    new AppError('Unauthorized, Token Expired', 401);

/**
 * @name sendErrorDev
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 */
const sendErrorDev = (err: any, _, res: Response) => {
    console.log('Testing', err);
    return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack,
    });
};

/**
 * @name sendErrorProd
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 */
const sendErrorProd = (err: any, _, res: Response) => {
    // TODO: Implement Crush Report

    if (err.isOperational) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Something went very wrong!',
    });
};

/**
 * @export
 * @param {any} err
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const globalErrorHandler = (err: AppError, req: Request, res: Response) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV !== 'production') {
        return sendErrorDev(err, req, res);
    } else {
        let error = { ...err };
        error.message = err.message;

        if (error.name === 'CastError') error = handleCastErrorDB(error);
        if (error.statusCode === 11000) error = handleDuplicateFieldsDB(error);
        if (error.name === 'ValidationError')
            error = handleValidationErrorDB(error);
        if (error.name === 'JsonWebTokenError') error = handleJWTError();
        if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

        return sendErrorProd(error, req, res);
    }
};

export default globalErrorHandler;
