// #1
let myVar = 1;
// creating a variable with let specifices the variable to local scope
var myVar2 = 1;
// var is similar to let but it is the old way of creating variable
//  that is no longer used professionally, however it is not
//  depreciated
const myVar3 = 1;
// const creats a global variable and is supposed to be a variable
//  that is a constant and does not change


// #2
// JS object literals are data types to store other data in an object
//  including strings, numbers, arrays, and other objects
// In a JSON object all data is represented as strings
let car = {
    make: "Buick",
    model: "Encore",
    color: "Red",
    miles: 23000
};

// object destructuring is a quick way to extract variables from an
//  object. This is done to skip using the object dot structure and 
//  make it easier to reference its variables
let drive = (milesDriven) => {
    const {make, model, color, miles} = car;
    miles += milesDriven;
};

// #3
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. \n-Nelson Mandela",
  "The way to get started is to quit talking and begin doing. \n-Walt Disney",
  "The future belongs to those who believe in the beauty of their dreams. \n-Eleanor Roosevelt",
  "You must be the change you wish to see in the world. \n-Mahatma Gandhi",
  "The only thing we have to fear is fear itself. \n-Franklin D. Roosevelt",
  "Well done is better than well said. \n-Benjamin Franklin",
  "It is during our darkest moments that we must focus to see the light. \n-Aristotle",
  "Be yourself; everyone else is already taken. \n-Oscar Wilde",
  "You will face many defeats in life, but never let yourself be defeated. \n-Maya Angelou",
  "Never let the fear of striking out keep you from playing the game. \n-Babe Ruth"
];

const button = document.querySelector("body main button");
button.addEventListener("click", () => {
  alert(quotes[Math.floor(Math.random() * quotes.length)]);
});