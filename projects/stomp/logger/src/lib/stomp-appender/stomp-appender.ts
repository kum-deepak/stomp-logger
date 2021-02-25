import { RxStompService } from '@stomp/ng2-stompjs';
import { LogLevel } from '../logger/log-level';
import { IAppender } from '../appender/i-appender';
import { StompAppenderConfig } from './stomp-appender-config';

export class StompAppender implements IAppender {
  constructor(
    public config: StompAppenderConfig,
    private rxStomp: RxStompService
  ) {}

  add(severity: LogLevel, message: string) {
    const headers = { ...this.config.headers, severity: `${severity}` };

    this.rxStomp.publish({
      destination: this.config.dest,
      headers,
      body: message,
    });
  }
}
