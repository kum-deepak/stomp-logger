import { IAppenderConfig } from '../appender/i-appender-config';
import { LogLevel } from '../logger/log-level';
export declare class ConsoleAppenderConfig implements IAppenderConfig {
    level: LogLevel;
    formatter?: (message: string) => any[];
}
