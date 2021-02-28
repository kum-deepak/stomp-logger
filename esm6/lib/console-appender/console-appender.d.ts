import { LogLevel } from '../logger/log-level';
import { IAppender } from '../appender/i-appender';
import { ConsoleAppenderConfig } from './console-appender-config';
export declare class ConsoleAppender implements IAppender {
    config: ConsoleAppenderConfig;
    constructor(config: ConsoleAppenderConfig);
    add(severity: LogLevel, message: string): void;
}
