const Logger = require('./Logger');

class Calculator {
    constructor() {
        this.id = Math.floor(Math.random() * 1000000);
        this.logger = new Logger(`Calculator:${this.id}`);
    }

    #log = (value) => {
        this.logger.log(value);
    }

    add(num1, num2) {
        const value = num1 + num2
        this.#log(value)
        return value;
    }

    subtract(num1, num2) {
        const value = num1 - num2
        this.#log(value)
        return value;
    }

    multiply(num1, num2) {
        const value = num1 * num2
        this.#log(value)
        return value;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error('Divide by zero');
        }
        const value = num1 / num2
        this.#log(value)
        return value;
    }
}

module.exports = Calculator;
