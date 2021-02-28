import { LogLevel } from './log-level';
export class Logger {
    constructor(config) {
        this.config = config;
    }
    add(severity, message) {
        this.config.appenders.forEach(appender => {
            if (severity >= appender.config.level) {
                appender.add(severity, message);
            }
        });
    }
    debug(message) {
        this.add(LogLevel.DEBUG, message);
    }
    info(message) {
        this.add(LogLevel.INFO, message);
    }
    warn(message) {
        this.add(LogLevel.WARN, message);
    }
    error(message) {
        this.add(LogLevel.ERROR, message);
    }
    fatal(message) {
        this.add(LogLevel.FATAL, message);
    }
}
//# sourceMappingURL=logger.js.map