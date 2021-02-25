import { IAppenderConfig } from '../appender/i-appender-config';
import { LogLevel } from '../logger/log-level';
import { StompHeaders } from '@stomp/stompjs';

export class StompAppenderConfig implements IAppenderConfig {
  level: LogLevel;
  dest: string;
  headers?: StompHeaders;
}
