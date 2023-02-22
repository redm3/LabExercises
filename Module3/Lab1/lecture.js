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



  
