import { createLogger, format, transports, Logger } from 'winston';

/** {error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5} */
const level = process.env.LOG_LEVEL || 'debug';

/**
- @description - Formatting Function Description
- @name - formatParams
- @params - info {}
- @returns - formatter String
  */
function formatParams(info: any): string {
    const { timestamp, level, message, ...args } = info;
    const ts = timestamp.slice(0, 19).replace('T', ' ');

    return `${ts} ${level}: ${message} ${
        Object.keys(args).length ? JSON.stringify(args, null) : ''
    }`;
}

/**
- Creating an Instance of Development Format Option
  */
const developmentFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.align(),
    format.printf(formatParams),
);

/**
- Creating an Instance of Production Format Option
  */
const productionFormat = format.combine(
    format.timestamp(),
    format.align(),
    format.printf(formatParams),
);

/**
- Checking Environment
- Creating an Instance of Logger
- Export Logger as Default for Further Uses
  */
let logger: Logger;
if (process.env.NODE_ENV !== 'production') {
    logger = createLogger({
        level,
        format: developmentFormat,
        transports: [new transports.Console()],
    });
} else {
    logger = createLogger({
        level,
        format: productionFormat,
        transports: [
            new transports.File({ filename: 'logs/error.log', level: 'error' }),
            new transports.File({ filename: 'logs/combined.log' }),
        ],
    });
}
export default logger;
