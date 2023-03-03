/* Lab for understanding the variety of functions concept in JavaScript
Requirement is to mimic the Pizza Making/Ordering procedure. Output of the program should be in the below
order
Started preparing Pizza
Pizza Base is Prepared
Cheese is added on Pizza
Veggies are added on Pizza
Pizza is heated
Pizza is ready
Program 1:Create 6 normal functions in Javascript which prints the above lines and call those functions in
sequence
Program 2:Replace the above normal function with Javascript Expression functions format
Program 3:Replace the Program 1 with arrow functions
Program 4: For the program 1 make the functions asynchronous by using setTimeOut for different operations with
different time durations. The output of this program should give the output in the order (Use callback pattern to
solve this issue)
Program 5 : Modify the program 4 to use Promises concept and achieve the required result
Program 6 : Modify the program 5 to use async and await concept to achieve the required result */

//Program 1:Create 6 normal functions in Javascript which prints the above lines and call those functions in sequence

// Function to start preparing the pizza
function preparePizza() {
    console.log("Started preparing Pizza");
}

// Function to prepare the pizza base
function preparePizzaBase() {
    console.log("Pizza Base is Prepared");
}

// Function to add cheese on the pizza
function addCheese() {
    console.log("Cheese is added on Pizza");
}

// Function to add veggies on the pizza
function addVeggies() {
    console.log("Veggies are added on Pizza");
}

// Function to heat the pizza
function heatPizza() {
    console.log("Pizza is heated");
}

// Function to indicate that the pizza is ready
function pizzaReady() {
    console.log("Pizza is ready");
}

// Call the functions in sequence to simulate the pizza making process
preparePizza();
preparePizzaBase();
addCheese();
addVeggies();
heatPizza();
pizzaReady();

// Program 2:Replace the above normal function with Javascript Expression functions format

// Function expression to start preparing the pizza
const preparePizza1 = function () {
    console.log("Started preparing Pizza");
};

// Function expression to prepare the pizza base
const preparePizzaBase1 = function () {
    console.log("Pizza Base is Prepared");
};

// Function expression to add cheese on the pizza
const addCheese1 = function () {
    console.log("Cheese is added on Pizza");
};

// Function expression to add veggies on the pizza
const addVeggies1 = function () {
    console.log("Veggies are added on Pizza");
};

// Function expression to heat the pizza
const heatPizza1 = function () {
    console.log("Pizza is heated");
};

// Function expression to indicate that the pizza is ready
const pizzaReady1 = function () {
    console.log("Pizza is ready");
};

// Call the functions in sequence to simulate the pizza making process
preparePizza1();
preparePizzaBase1();
addCheese1();
addVeggies1();
heatPizza1();
pizzaReady1();

//Program 3:Replace the Program 1 with arrow functions

// Arrow function to start preparing the pizza
const preparePizza2 = () => {
    console.log("Started preparing Pizza");
};

// Arrow function to prepare the pizza base
const preparePizzaBase2 = () => {
    console.log("Pizza Base is Prepared");
};

// Arrow function to add cheese on the pizza
const addCheese2 = () => {
    console.log("Cheese is added on Pizza");
};

// Arrow function to add veggies on the pizza
const addVeggies2 = () => {
    console.log("Veggies are added on Pizza");
};

// Arrow function to heat the pizza
const heatPizza2 = () => {
    console.log("Pizza is heated");
};

// Arrow function to indicate that the pizza is ready
const pizzaReady2 = () => {
    console.log("Pizza is ready");
};

// Call the functions in sequence to simulate the pizza making process
preparePizza2();
preparePizzaBase2();
addCheese2();
addVeggies2();
heatPizza2();
pizzaReady2();

//Program 4: For the program 1 make the functions asynchronous by using setTimeOut for different operations with
//different time durations. The output of this program should give the output in the order (Use callback pattern to
//solve this issue)

// Function to start preparing the pizza
function preparePizza3(callback) {
    setTimeout(() => {
        console.log("Started preparing Pizza");
        callback();
    }, 1000);
}

// Function to prepare the pizza base
function preparePizzaBase3(callback) {
    setTimeout(() => {
        console.log("Pizza Base is Prepared");
        callback();
    }, 2000);
}

// Function to add cheese on the pizza
function addCheese3(callback) {
    setTimeout(() => {
        console.log("Cheese is added on Pizza");
        callback();
    }, 1500);
}

// Function to add veggies on the pizza
function addVeggies3(callback) {
    setTimeout(() => {
        console.log("Veggies are added on Pizza");
        callback();
    }, 2500);
}

// Function to heat the pizza
function heatPizza3(callback) {
    setTimeout(() => {
        console.log("Pizza is heated");
        callback();
    }, 3000);
}

// Function to indicate that the pizza is ready
function pizzaReady3() {
    console.log("Pizza is ready");
}

// Call the functions in sequence using callback pattern to simulate the pizza making process
preparePizza3(() => {
    preparePizzaBase3(() => {
        addCheese3(() => {
            addVeggies3(() => {
                heatPizza3(() => {
                    pizzaReady3();
                });
            });
        });
    });
});

//Program 5 : Modify the program 4 to use Promises concept and achieve the required result
