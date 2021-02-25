import { Injectable } from '@angular/core';
import { IAppender } from '../appender/i-appender';

@Injectable()
export class LoggerConfig {
  appenders: IAppender[];
}
