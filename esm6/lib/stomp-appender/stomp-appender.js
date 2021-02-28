export class StompAppender {
    constructor(config, rxStomp) {
        this.config = config;
        this.rxStomp = rxStomp;
    }
    add(severity, message) {
        const { headers: headers, message: msg } = this.config.formatter(message);
        this.rxStomp.publish({
            destination: this.config.dest,
            headers: Object.assign(Object.assign({}, headers), { severity: `${severity}` }),
            body: msg,
        });
    }
}
//# sourceMappingURL=stomp-appender.js.map