# Logger

## Introduction

## Usage

### Install

```bash
$ npm i @stomp/logger
```

###

Provide a LoggerService, typically in `modules.ts`

```typescript
// As per your application logic
const userId = '9be7ecd3-b706-43ee-9114-628241a808bd';
const sessionId = '972e139d-2426-4955-b2f9-74532e790722';

function initLoggerService(rxStomp: RxStompService): LoggerService {
  const stompAppenderConfig = {
    // Typically a header exchange in RabbitMQ
    dest: '/exchange/user-log',
    
    // Log messages above or equal to this priority
    level: LogLevel.DEBUG,
    
    // This is called just before logging a message
    // It must retrun headers and message
    formatter: message => ({
      headers: {
        user: userId,
        session: sessionId,
        ts: `${Date.now()}`
      },
      message
    })
  };

  const stompAppender = new StompAppender(stompAppenderConfig, rxStomp);

  const config: LoggerConfig = {
    // In future more appender types can be supported
    appenders: [stompAppender],
  };

  return new LoggerService(config);
}

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
logger.debug('my dibug message');
```
