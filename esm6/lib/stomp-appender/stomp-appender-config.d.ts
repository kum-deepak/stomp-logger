import { StompHeaders } from '@stomp/stompjs';
import { IAppenderConfig } from '../appender/i-appender-config';
import { LogLevel } from '../logger/log-level';
export declare class StompAppenderConfig implements IAppenderConfig {
    level: LogLevel;
    dest: string;
    formatter: (message: string) => {
        headers: StompHeaders;
        message: string;
    };
}
