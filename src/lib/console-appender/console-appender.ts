import { LogLevel } from '../logger/log-level';
import { IAppender } from '../appender/i-appender';
import { ConsoleAppenderConfig } from './console-appender-config';

// methods to call on console for corresponding logger methods.
// `fatal` is mapped to `error`
const MAP = [
  // tslint:disable-next-line:no-console
  console.debug,
  // tslint:disable-next-line:no-console
  console.info,
  // tslint:disable-next-line:no-console
  console.warn,
  // tslint:disable-next-line:no-console
  console.error,
  // tslint:disable-next-line:no-console
  console.error,
];

export class ConsoleAppender implements IAppender {
  constructor(public config: ConsoleAppenderConfig) {}

  add(severity: LogLevel, message: string) {
    const toLog =
      typeof this.config.formatter === 'function'
        ? this.config.formatter(message)
        : [message];

    MAP[severity].call(console, ...toLog);
  }
}
