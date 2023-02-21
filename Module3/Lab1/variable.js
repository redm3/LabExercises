console.log("part 1")
console.log("" + 1 + 0);
//10
console.log("" - 1 + 0);
//0
console.log(true + false)
//1
//0
console.log(!true)
//false
console.log(6/"3")
//2
console.log("2" * "3")
//6
console.log(4 + 5 + "px")
//9px
console.log("$" + 4 + 5)
//$45
console.log("4" - 2)
//2
console.log("4px" - 2)
//2px
//NaN
console.log(" -9 " + 5)
//-4
//-9 5
console.log(" -9 " - 5)
//-9 -5
//-14
console.log(null + 1)
//1 
console.log(undefined + 1)
//undefined
console.log(undefined == null)
//True
console.log(undefined == null)
//true
console.log(" \t \n" - 2)
//-2
console.log("part 2")
let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four
//34
let multiplication = three * four
//12
let division = three / four
//0.75
let subtraction = three - four
//-1
let lessThan1 = three < four
//tru
let lessThan2 = thirty < four
//false

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)
//part 3
console.log("part 3")
//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true')
if ("0") console.log('#2 zero is true')
if (null) console.log('null is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')
//answer

//results
if ("0") console.log('#2 zero is true')
if (-1) console.log('negative is true')
if (1) console.log('positive is true')

console.log("part 4")

/* let a = 2, b = 3;
let result = `${a} + ${b} is `;
if (a + b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
} */

let a = 2, b = 3;
let result = `${a} + ${b} is ${a + b < 10 ? 'less than 10' : 'greater than 10'}`;
console.log(result)

console.log("part 5")

/* function getGreeting(name) {
    return 'Hello ' + name + '!';
} */

//function expression syntax,
const getGreeting1 = function(name) {
    return 'Hello ' + name + '!';
};

//Using arrow function syntax:
const getGreeting2 = (name) => {
    return 'Hello ' + name + '!';
};

console.log(getGreeting1('marco'))
console.log(getGreeting2('marco'))

console.log("part 6")
//a
const inigo = {
    firsName: 'Marco',
    lastName: 'Wells',
    getGreeting3: function() {
        return 'Hello ' + this.firsName + ' ' + this.lastName + '.';
    }  
};
console.log(inigo.getGreeting3())

//b
function getCatchPhrase(person) {
    if (person.fingers === 6) {
      console.log("My name is Inigo Montoya. You killed my father. Prepare to die.");
    } else {
      console.log("You seem a decent fellow. I hate to kill you.");
    }
  }
  
  const sixFingeredMan = {
    name: "Six Fingered Man",
    fingers: 6
  };
  
  const fiveFingeredMan = {
    name: "Five Fingered Man",
    fingers: 5
  };
  
  getCatchPhrase(sixFingeredMan); // Output: My name is Inigo Montoya. You killed my father. Prepare to die.
  getCatchPhrase(fiveFingeredMan); // Output: You seem a decent fellow. I hate to kill you.
//used chatgbt for b because i didnt the movie
//c

const westley = {
    name: 'Westley',
    numFingers: 5
}

    const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo1 = {
    firstName: 'Inigo',


    greeting(person) {
        let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
        console.log(greeting + this.getCatchPhrase(person));
    },

    getCatchPhrase: (person) => person.numFingers === 6 ? "My name is Inigo Montoya. You killed my father. Prepare to die." : "Nice to meet you."
};


inigo1.greeting(westley)
inigo1.greeting(rugen)

console.log("part 7")