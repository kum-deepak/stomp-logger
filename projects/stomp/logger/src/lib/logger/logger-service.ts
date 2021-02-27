import { Injectable } from '@angular/core';
import { LoggerConfig } from './logger-config';
import { LogLevel } from './log-level';

@Injectable()
export class LoggerService {
  constructor(public config: LoggerConfig) {}

  public add(severity: LogLevel, message: string): void {
    this.config.appenders.forEach(appender => {
      if (severity >= appender.config.level) {
        appender.add(severity, message);
      }
    });
  }

  public debug(message: string): void {
    this.add(LogLevel.DEBUG, message);
  }

  public info(message: string): void {
    this.add(LogLevel.INFO, message);
  }

  public warn(message: string): void {
    this.add(LogLevel.WARN, message);
  }

  public error(message: string): void {
    this.add(LogLevel.ERROR, message);
  }

  public fatal(message: string): void {
    this.add(LogLevel.FATAL, message);
  }
}
