import { RxStomp } from '@stomp/rx-stomp';
import { LogLevel } from '../logger/log-level';
import { IAppender } from '../appender/i-appender';
import { StompAppenderConfig } from './stomp-appender-config';
export declare class StompAppender implements IAppender {
    config: StompAppenderConfig;
    private rxStomp;
    constructor(config: StompAppenderConfig, rxStomp: RxStomp);
    add(severity: LogLevel, message: string): void;
}
