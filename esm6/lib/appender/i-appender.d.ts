import { LogLevel } from '../logger/log-level';
import { IAppenderConfig } from './i-appender-config';
export interface IAppender {
    config: IAppenderConfig;
    add(severity: LogLevel, message: string): void;
}
