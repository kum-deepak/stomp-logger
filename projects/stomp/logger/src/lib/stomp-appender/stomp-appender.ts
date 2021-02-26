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
    const { headers: headers, message: msg } = this.config.formatter(message);

    this.rxStomp.publish({
      destination: this.config.dest,
      headers: { ...headers, severity: `${severity}` },
      body: msg,
    });
  }
}
