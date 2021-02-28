import { LoggerConfig } from './logger-config';
import { LogLevel } from './log-level';
export declare class Logger {
    config: LoggerConfig;
    constructor(config: LoggerConfig);
    add(severity: LogLevel, message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
}
