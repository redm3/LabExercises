console.log('Hello')

function SayHello(){
    console.log('Hello')
}


SayHello()

function Sum(A,B){
    console.log(A+B)
}

Sum(5,1)



function subtract(a, b) {
    return a - b;
}

const result1 = subtract(10, 5);
console.log("10 - 5 = " + result1);


function add(a, b) {
    return a + b;
}

const result2 = add(10, 5);
console.log("10 + 5 = " + result2);


function divide(a, b) {
    return a / b;
}

const result3 = divide(10, 5);
console.log("10 / 5 = " + result3);

function multiply(a, b) {
    return a * b;
}

const result4 = multiply(10, 5);
console.log("10 * 5 = " + result4);

function greet(name) {
    console.log("Hello " + name);
}

greet("Marco")

var Sentiment = require('sentiment');
//var sentiment = new Sentiment();
//var result = sentiment.analyze('Cats are great.');
//console.dir(result);    // Score: -2, Comparative: -0.666

function analyseSentence(sentence) {
    var sentiment = new Sentiment();
    var result = sentiment.analyze(sentence);
    return result.score;

}

console.log(analyseSentence("I love chocolate but I hate that it makes me fat."))