//1
function ucFirstLetters(str){
    //split the above string into an array of strings 
    //whenever a blank space is encountered
    const array = str.split(" ")
    //loop through each element of the array and capitalize the first letter.
    for (var i =0; i<array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const result = array.join(" ");
    /* console.log(result); */
    return result;
}

console.log(ucFirstLetters("los angeles") ) //Los Angeles
//https://flexiple.com/javascript/javascript-capitalize-first-letter/

//2
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
//2b
let longString = "This is a super long string that has blah blah blah blah blah blah.";
let shortString = "Short string.";

console.log(truncate(longString,30));
console.log(truncate(shortString,10));

function truncate1(fullString1, maxChars1){
    return fullString1.length >= maxChars1 ? fullString1.substring(0,maxChars1) + "..." : fullString1;
}

let longString1 = "This is a super long string that has blah blah blah blah blah blah.";
let shortString1 = "Short string.";


console.log(truncate1(longString1,30));
console.log(truncate1(shortString1,10));


//3
const animals = ['Tiger', 'Giraffe']
//a
animals.push("Pringles", "Hippo")
//b
animals.unshift("Dog","walrus")
//c
animals.sort();
//d
function replaceMiddleAnimal(newValue){
//that replaces the value in the middle of the animals array with newValue
    const middle = Math.floor((animals.length)/2);
    animals[middle] = newValue;
    


}
//this replaces rhino
replaceMiddleAnimal("Rhino")
//e
function findMatchingAnimals(beginsWith) {
    const matchingAnimals = [];
    for (let i = 0; i < animals.length; i++) {
      if (animals[i].toLowerCase().startsWith(beginsWith.toLowerCase())) {
        matchingAnimals.push(animals[i])
      }
    }
    return matchingAnimals
  }

console.log(findMatchingAnimals('D'));
console.log(findMatchingAnimals('G'));
console.log(findMatchingAnimals('h'));
console.log(findMatchingAnimals('t'));
console.log(findMatchingAnimals('W'));

console.log(animals)

//4
/* 
function camelCase(cssProp){
  if (cssProp.indexOf('-') == -1){
    return cssProp
  } 
  //split the string by dashes
  words = cssProp.split("-")
  //capitilize the first word
  for (var i =0; i<words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
  // Join the words and return the result
  //const result = array.join(" ");
  var result =  words.join('');

  if (words.length > 1){
    result = result[i] = result[i].charAt(0).toLowerCase() + result[i].slice(1)
  }
  return result;

}
*/
function camelCase(cssProp){
    let words = cssProp.split("-")

    if (words.length > 1){
        for (var i =0; i<words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }
  return words.join('')
}

//b

function camelCase1(cssProp) {
  let words = cssProp.split("-");
  if (words.length > 1) {
    for (let word of words) {
      word = word[0].toUpperCase() + word.substring(1);
    }
  }
  return words.join("");
}

 
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

console.log(camelCase1('margin-left')) // marginLeft
console.log(camelCase1('background-image')) // backgroundImage
console.log(camelCase1('display')) // display