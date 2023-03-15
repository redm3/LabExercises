class Logger {
    constructor(id) {
        this.id = id;
    }

    log(message) {
        console.log(`[${this.id}]: ${message}`);
    }
}

module.exports = Logger;
