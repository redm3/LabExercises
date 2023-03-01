//1

function makeCounter() {
    let currentCount = 0;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}
let counter1 = makeCounter();
counter1(); // 1
counter1(); // 2

//a) Create a second counter counter2 using the makeCounter function and test to see if
//it remains independent to counter1

let counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

//b) Modify makeCounter so that it takes an argument startFrom specifying where the
//counter starts from (instead of always starting from 0)

function makeCounter1(startFrom) {
    let currentCount = startFrom;
    return function () {
        currentCount++;
        console.log(currentCount)
        return currentCount;
    };
}

let counter3 = makeCounter1(7);
counter3(); // 8
counter3(); // 9

//c) Modify makeCounter to take another argument incrementBy, which specifies how
//much each call to counter() should increase the counter value by.

function makeCounter2(startFrom, incrementBy) {
    let currentCount = startFrom;
    return function () {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

let counter4 = makeCounter1(0, 1);
counter4(); // 8
counter4(); // 9

//2

function delayMsg(msg) {
    console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//a) What order will the four tests below print in? Why?
//#4 no delay
//#3 delayed 0ms
//#2 delayed 20ms
//#1 print last bc 100ms

//b) Rewrite delayMsg as an arrow function

const delayMsg1 = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(() => delayMsg1('#1: Delayed by 100ms'), 100);
setTimeout(() => delayMsg1('#2: Delayed by 20ms'), 20);
setTimeout(() => delayMsg1('#3: Delayed by 0ms'), 0);
delayMsg1('#4: Not delayed at all');

//c) Add a fifth test which uses a large delay time (greater than 10 seconds)

const timeoutId = setTimeout(() => delayMsg1('#5: Delayed by 10s'), 10000);

//d) Use clearTimeout to prevent the fifth test from printing at all.
/* clearTimeout(timeoutId);  */
/* const timeoutId = setTimeout(() => delayMsg1('#5: Delayed by 10s'), 10000); */

clearTimeout(timeoutId); // Cancel the timer

//3 a
//b
//c

const debounce = (func, ms) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, ms);
    }
}

function printMe(msg) {
    console.log(`printing debounced message: ${msg}`);
}

/* printMe = debounce(printMe, 1000);  */

const debounced = debounce(printMe, 1000);
debounced("MARCO WELLS");

//create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
//1000ms of no calls

/* setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300); */

/* setTimeout(() => debouncedPrintMe('First call'), 100); */

//4

function fibonacci() {
    let current = 0;
    let next = 1;

    function calc() {
        const temp = next;
        next = current + next;
        current = temp;
        console.log(current);
    }

    return calc;
}

function printFibonacci() {
    const calc = fibonacci();
    setInterval(calc, 1000);
}

printFibonacci();

//4b

function printFibonacciTimeouts() {
    let prev = 0;
    let curr = 1;

    function print() {
        console.log(curr);
        let next = prev + curr;
        prev = curr;
        curr = next;
        setTimeout(print, 1000);
    }

    setTimeout(print, 1000);
}

printFibonacciTimeouts();

//c
function printFibonacciTimeoutsnested(limit) {
    let count = 0;
    let prev = 0;
    let curr = 1;

    function print() {
        console.log(curr);
        let next = prev + curr;
        prev = curr;
        curr = next;
        count++;

        if (count < limit) {
            setTimeout(print, 1000);
        }
    }

    setTimeout(print, 1000);
}

// print the first 10 Fibonacci numbers
printFibonacciTimeoutsnested(10);

//5

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {

        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
car.description(); //works

setTimeout(car.description, 200); //fails

//a) Fix the setTimeout call by wrapping the call to car.description() inside a function


setTimeout(() => car.description(), 200); 

//b) Change the year for the car by creating a clone of the original and overriding it

let car2 =  { ...car }
car2.year = 1970;

setTimeout(() => car2.description(), 400);

//c) Does the delayed description() call use the original values or the new values from b)? Why?
//no it does update the description for the orignal copy. THis is because a shallow copy is created where it then updates the clone the new value.

//d) Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
let car3 =  { ...car }
car3.year = 1970;
setTimeout(car3.description.bind(car3), 400);

//e) Change another property of the car by creating a clone and overriding it, and test that setTimeout still uses the bound value from d)
let car4 =  { ...car3 }
car4.model = 'Taycan';
car4.year = 2021;
setTimeout(car3.description.bind(car4), 600);

//6