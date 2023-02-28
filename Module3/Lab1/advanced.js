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

let counter4 = makeCounter1(0,1);
counter4(); // 8
counter4(); // 9

//2

function delayMsg(msg)
{
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

setTimeout(() => delayMsg1('#5: Delayed by 10s'), 10000);

//d) Use clearTimeout to prevent the fifth test from printing at all.

const timeoutId = setTimeout(() => delayMsg1('#5: Delayed by 10s'), 10000);
clearTimeout(timeoutId); // Cancel the timer
