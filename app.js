// let test;
// test = 10;

// console.log(test);

// const num = 2;
// num = 6;
// console.log(num);
// const num = 2;
// num = 6;
// console.log(num);

// const num;
// num = 6;
// console.log(num);

// let test;

// console.log(test);

// const num = 2;
// num = 6;
// console.log(num);
// Javascript basics Boolean
// console.log(Boolean(0));
// const name = "james";
// console.log(Boolean(name));
// const price = 10;
// console.log(Boolean(price));
// // let isTrue = true;
// // console.log(isTrue);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(-1));

// Javascript basics Operators

// const priceOne = 1;
// const priceTwo = 1;
// const priceThree = 2;

// console.log(priceOne <= priceTwo);

// console.log(priceOne <= priceThree);

// function
// function addTwoNum(x, y) {
//   return x + y;
// }

// result = addTwoNum(2, 7);

// console.log(result);

// function greetThePlanet() {
//   return "Hello World";
// }

// output = greetThePlanet();

// console.log(output);

// Function declaration
// program to add two numbers
// function addNum(x, y) {
//   return x + y;
// }

// // take input from User
// let num1 = parseFloat(prompt("Enter Number 1 :"));
// let num2 = parseFloat(prompt("Enter Number 2 : "));

// let result = addNum(num1, num2);

// console.log("This result is : " + result);

// program to find the square of a number

// function square(num) {
//   return num * num;
// }

// let result = square(15);

// console.log(result);

// Function Expressions

// let sqaureOfNumber = function (num) {
//   return num * num;
// };

// console.log(sqaureOfNumber(4));

// // can be used as variable value for other variables
// let y = sqaureOfNumber(3);

// console.log(y);

// JavaScript Variable Scope

// let name = "Sanusi"; //Global Scope Variable

// function displayName() {
//   console.log(name);
//   name = "Ahmad";
//   console.log(name);
// }

// displayName();

// console.log(name);

// program showing local scope of a variable
// let a = "hello";

// function greet() {
//   let b = " World";
//   console.log(a + b);
// }

// greet();
// console.log(a + b); // error

// Q1 = Write a function to convert Celsius to Fahrenheit

//Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

// function calFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// let result = calFahrenheit(0);
// let result1 = calFahrenheit(20);
// let result2 = calFahrenheit(40);

// console.log(result);
// console.log(result1);
// console.log(result2);

// 4. Write a function to find the area of a given Rectangle

// Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
// function rectangleArea(w, h) {
//   return `The area of rectangle is ${w * h}`;
// }

// console.log(rectangleArea(15, 10));
// console.log(rectangleArea(5, 10));

// 5. Write a function to find the area and perimeter of a Circle

// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.
// 2*PI*Radius, and its area equals to PI*(Radius*2)

// function circleValues(radius) {
//   return `Parameter :${2 * Math.PI * radius}, Area : ${
//     Math.PI * radius * radius
//   }`;
// }

// console.log(circleValues(10));

// 1. Create two variables, myAge and humanDogRatio
// let myAge = 42;
// let humanDogRatio = 7;

// // 2. Multiply the two together and store the result in myDogAge
// let myDogAge = myAge * humanDogRatio;

// 3. Log myDogAge to the console
// console.log(myDogAge);

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 70;
// console.log(bonusPoints);

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Sanusi";
// let greeting = "Hi, my name is ";

// let myGreeting = greeting + name;

// // console.log(myGreeting);

// console.log(4 + 5); //9
// console.log("2" + "4"); //24
// console.log("5" + 1); //51
// console.log(100 + "100"); //100100

// // Create two variables, firstName and lastName
// let firstName = "Sanusi";
// let lastName = "Muhyideen";

// // Concatenate the two variables into a third variable called fullName

// let fullName = firstName + " " + lastName;

// Log fullName to the console
// console.log(fullName);

// let name = "Linda";
// let greeting = "Hi there";

// // Create a function that logs out "Hi there, Linda!" when called
// function greet() {
//   console.log(greeting + ", " + name + "!");
// }

// // greet();

// let myPoints = 3;
// console.log(" Intial point :" + myPoints);

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// function add3Points() {
//   myPoints = myPoints + 3;
//   console.log("3 points Added : " + myPoints);
// }
// // add3Points();
// // add3Points();
// // add3Points();

// function remove1Point() {
//   myPoints = myPoints - 1;
// }
// remove1Point();
// remove1Point();

// Call the functions to that the line below logs out 10
// console.log(myPoints);
// console.log("1 point removed : " + myPoints);

// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
// let purchase = document.getElementById("btn");
// // let errorDisplay = document.getElementById("error");
// // console.log(purchase);

// purchase.addEventListener("click", function () {
//   console.log("Button Click");
//   let errorDisplay = document.getElementById("error");
//   errorDisplay.textContent = "Something went wrong, please try again";
// });

let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let add = document.getElementById("add-el");
let subtract = document.getElementById("subtract-el");
let divide = document.getElementById("divide-el");
console.log(divide);
let multiply = document.getElementById("multiply-el");
console.log(multiply);
let displayResult = document.getElementById("sum-el");
console.log(displayResult);

add.addEventListener("click", function () {
  let addResult = num1 + num2;
  console.log(addResult);
  displayResult.textContent = "Sum : " + addResult;
});

subtract.addEventListener("click", function () {
  let subtractResult = num1 - num2;
  console.log(subtractResult);
  displayResult.textContent = "Sum : " + subtractResult;
});

divide.addEventListener("click", function () {
  let divideResult = num1 / num2;
  console.log(divideResult);
  displayResult.textContent = "Sum : " + divideResult;
});

multiply.addEventListener("click", function () {
  let multiflyResult = num1 * num2;
  console.log(multiflyResult);
  displayResult.textContent = "Sum : " + multiflyResult;
});

// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
// let firstCard = 11;
// let secondCard = 9;

// let sum = firstCard + secondCard;
// // console.log(sum);

// if (sum < 21) {
//   console.log("Do you want to draw a new card? 🙂");
// } else if (sum === 21) {
//   console.log("Wohoo! You've got Blackjack! 🥳");
// } else {
//   console.log("You're out of the game! 😭");
// }
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// let age = 1;

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// if (age < 21) {
//   console.log("You can not enter the club!");
// } else {
//   console.log("Welcome! the door is open");
// }

// Check if the person is elegible for a birthday card from the King! (100)

// let age = 100;

// // if less than 100    -> "Not elegible"
// // else if exactly 100 -> "Here is your birthday card from the King!"
// // else                -> "Not elegible, you have already gotten one"
// if (age < 100) {
//   console.log("Not elegible");
// } else if (age === 100) {
//   console.log("Here is your birthday card from the King!");
// } else {
//   ("Not elegible, you have already gotten one");
// }

// Arrays - ordered lists of items

// 0 indexed
let featuredPosts = [
  "Check out my Netflix clone",
  "Here's the code for my project",
  "I've just relaunched my portfolio",
];

let experience = [
  "CEO at Scrimba",
  "Frontend developer at Xeneta",
  "People counter for Norstat",
];

let education = [
  "Idea Islamic Nur and Primary School Kano",
  "Goverment Secondary School stadium kano",
  "Lagos city computer college Lagos",
  "Lagos State University Lagos",
];

console.log(education[1]);

// Make the following appear in the console:
// Frontend developer at Xeneta
// People counter for Norstat
// CEO at Scrimba

// Array - ordered list of items - coposite / complex data type

// Create an array that describes yourself. Use the three primitive data types you've learned
// It should contain your name (string), your age (number), and whether you like pizza (boolean)

// let person = ["Sanusi", 42, true];
// console.log(person[0]);
// console.log(person[2]);
// console.log(person[1]);

let cards = [7, 4];
cards.push(6);
//console.log(cards)

// Push the newMessage to the messages array, and then log out the array

let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
];

let newMessage = "Same here!";
messages.push(newMessage);

console.log(messages);
