//beginner
//create a function getBMI(height, weight) which calculates and returns a person's BMI (google the formula)

function getBMI(height, weight){
    const bmi = weight / (height * height);
    return bmi;
}

const bmi = getBMI(1.82, 90);
console.log(bmi); 

//arow function
const getBMI1 = (height, weight) => weight / (height ** 2);

const height = 1.82; // in meters
const weight = 90; // in kilograms
const bmi1 = getBMI1(height, weight);

console.log(`The person's BMI is ${bmi1}`);

//create your own object with multiple properties
//make sure some are multiple values

//write a function to print out all names/values using for ... in

const aboutme = {
    name: 'Marco',
    age: 25,
    hobbies: ['SnowBoarding', 'Coding', 'Traveling'],
    address: {street: '123 Cool St',city: 'Auckland',country: 'NZ',},
    //add some functions
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old and I enjoy ${this.hobbies}`);
    },

    addHobby: function(hobby) {
      this.hobbies.push(hobby);
    }
  };
  
  function printProperties(obj) {
    for (let prop in obj) {
      console.log(`${prop}: ${obj[prop]}`);
    }
  }
  
  //printObjectValues(aboutme)

  aboutme.addHobby('Gym');

  aboutme.greet(); 

  printProperties(aboutme); 


  let number1 = 10
  let number2 = "20"
  console.log(number1+number2)

  //intermediate
/*   let indexOfFox=quickFox.indexOf('fox')
  console.log(indexOfFox >= 0 ? 'found fox' : 'not found')

  let foxSubString = quickFox.substring(indexOfFox, indexOfFox+10)
  console.log(foxSubString) */

  function truncate(fullString, maxChars) {
    //return a truncated version of fullString that is maxChars characters long
    if (fullString.length <= maxChars){
      return fullString;
      //add a ... to the truncated string if it was longer than max Chars
    } else{
      return fullString.substring(0,maxChars) + "..."
    }
    //test with both long and short strings
}

let longString = "This is a super long string that has blah blah blah blah blah blah.";
let shortString = "Short string.";

console.log(truncate(longString,30));
console.log(truncate(shortString,10));

//functions to count the words in a string

function countWords(string){
    let words = string.split(' ');
    return words.length;

}

console.log(countWords(longString));

//to string function probs important 4 database in capstone

const marco = {
  name: 'Marco',
  age: '25',
  country:'NZ',
  toString(){
    return `${this.name}, age: ${this.age}, from: ${this.country}`;
  }
}

console.log('The parson you are trying to reach is called ' + marco)

const product2 = {
  name: 'Average Product',
  category: 'useful things',
  price: 15.00,
  discount_percent: 10,
  gst_percent: 10,
  valueOf() {
    return this.price - (this.price * (this.discount_percent / 100)) + (this.price * (this.gst_percent/100));
  },
  toString() {
    return `${this.name} (${this.category})`;
  }
};

let product2_quantity = 2;

console.log(`${product2} with quantity ${product2_quantity} costs $${product2.valueOf() * product2_quantity}.`);

//foreach

const colors = ['red', 'green', 'blue'];

colors.forEach(color => console.log(color));


  
//array proto type find

const numbers = [1, 2, 3, 4, 5];

const evenNumber = numbers.find(function(number) {
  return number % 2 === 0;
});

console.log(evenNumber);

//arrow array proto type function

const numbers1 = [1, 2, 3, 4, 5];

const evenNumber1 = numbers1.find(number1 => number1 % 2 === 0);

console.log(evenNumber1);

//map

const numbers3 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers3.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers);

//indexOf

const fruits = ['apple', 'banana', 'orange', 'pear'];

const index = fruits.indexOf('orange');

console.log(index);


//reduce

const reducenumberarray = [1, 2, 3, 4, 5];
const sum = reducenumberarray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // output: 15

//sort our people by last name

const people = [
  {firstName: 'Wendy', lastName: 'Darton', age: 52, location: 'QLD'},
  {firstName: 'Steven', lastName: 'Williams', age: 41, location: 'NSW'},
  {firstName: 'Phillip', lastName: 'Robertson', age: 38, location: 'VIC'},
  {firstName: 'Connor', lastName: 'Edmonds', age: 24, location: 'NZ'},
  {firstName: 'Sheila', lastName: 'Horne', age: 37, location: 'QLD'},
]


/* people.filter(person => person.location == 'QLD').sort(person1,person2) => {

} */

//use find and map to get the first name of the person living in nz
//find
const firstNameNZ = people
  .find(person => person.location === 'NZ') // find the person living in NZ
  .firstName; // get the first name of that person

console.log(firstNameNZ); 
//map
const firstNameNZ1 = people
  .filter(person => person.location === 'NZ') // filter the people living in NZ
  .map(person => person.firstName)[0]; // get the first name of the first person in the filtered array

console.log(firstNameNZ1);

//use split, map and join to change the months into their short 3 letter versions:
let months = 'Januart,February,March,April,May,June,July,August,September,October,November,December';

// split the string into an array of month names
let monthArray = months.split(',');
// map each month name to its first 3 letter month name
let threeMonthArray = monthArray.map(function(month) {
  return month.slice(0, 3);
});
// join 
let shortMonths1 = threeMonthArray.join(',');
console.log(shortMonths1)


//In the Philippines they refer to the 'ber' (brr) months as the colder part of the year. Try and return an array of just the ber months

let berMonths = months.split(',').filter(month => month.endsWith('ber'));
console.log(berMonths);

//maps
const plantNames = new Map();
plantNames.set('Blueberry', 'Vaccinium');
plantNames.set('Daylily', 'Hemerocallis');
plantNames.set('Foxglove', 'Digitalis');
plantNames.set('Lavender', 'Lavandula');
plantNames.set('Turmeric', 'Curcuma Longa')

// Get the value for a specific key
const value = plantNames.get('Lavender');
console.log(value); // Lavandula

// Check if a key exists in the Map
const hasKey = plantNames.has('Foxglove');
console.log(hasKey); // true

// Set a new key-value pair
plantNames.set('Rosemary', 'Rosmarinus');
console.log(plantNames); 

//practice for … of loop with keys or entries or values
const foodMap = new Map();
foodMap.set('🍔', 'Burger');
foodMap.set('🌭', 'Hot Dog');
foodMap.set('🍟', 'French Fries');

for (const emoji of foodMap.keys()) {
  console.log(emoji);
}

//keys, values, entries
for (let commonPlant of plantNames.keys()) {
  console.log('#1: ( leys, lookup value with get)' + commonPlant + ' latin name is ' + plantNames.get(commonPlant));
}

for (let latinPlant of plantNames.values()) { 
  console.log('#2: (values only)' + latinPlant);
}

for (let plant of plantNames.entries()) {
  console.log('#3: (indexed entries)' + plant[0] + ' latin name is ' + plant[1]);
}

for (let[commonPlantName,latinPlantName] of plantNames) {
  console.log('#3: (destructed entries)' + commonPlantName + ' latin name is ' + latinPlantName);
}


