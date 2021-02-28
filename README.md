# Logger

An Angular Logger service with multiple Appenders.

## Install

```bash
$ npm i @stomp/logger
```

## Usage

Create an Injectable class and a way to create it in `logger-service.ts`

```typescript
// Define a class that can be injected by Angular DI
@Injectable({
  providedIn: 'root',
})
export class LoggerService extends Logger {}

// As per your application logic
const userId = '9be7ecd3-b706-43ee-9114-628241a808bd';
const sessionId = '972e139d-2426-4955-b2f9-74532e790722';

export function initLoggerService(rxStomp: RxStompService): LoggerService {
  // STOMP Appender will publish each log message to the provided destination
  const stompAppenderConfig = {
    // mandatory, the STOMP destination, typically a header/topic Exchange
    dest: '/exchange/user-log',
    // Minimum severity level to log
    level: LogLevel.DEBUG,
    // Provide a header for each log message
    // You may also alter the message
    formatter: message => ({
      headers: {
        user: userId,
        session: sessionId,
        ts: `${Date.now()}`,
      },
      message,
    }),
  };
  const stompAppender = new StompAppender(stompAppenderConfig, rxStomp);

  // Console Appender will show the messages on the console
  // The console does not have a call for `fatal` to that will be logged using
  // `console.error`
  const consoleAppender = new ConsoleAppender({
    // Minimum severity level to log
    level: LogLevel.DEBUG,
    // This is optional - it allows to modify the message being logged.
    // You can return an Array which will be passed to the console method
    // You may also alter the message.
    formatter: message => [new Date(), message],
  });

  const config: LoggerConfig = {
    // You can use any number of appenders
    appenders: [stompAppender, consoleAppender],
  };

  return new LoggerService(config);
}
```

Provide a `LoggerService`, typically in `app.modules.ts`

```typescript
@NgModule({
  // ...
  providers: [
    // ...
    {
      provide: LoggerService,
      useFactory: initLoggerService,
      deps: [RxStompService],
    },
  ],
  bootstrap: [AppComponent],
})
```

To log messages:

```typescript
// debug, info, warn, error, fatal (same as Ruby logger, or Log4J
logger.debug('my debug message');
```

## New Appender

Implementing a new Appender is not complicated.
See code for existing Appenders for help.

## Watching the messages live

To watch the messages live, please use the [watch.rb ruby script](examples/ruby-sample/) 
(using `bunny` gem for AMQP).
