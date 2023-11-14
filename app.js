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
let myAge = 42;
let humanDogRatio = 7;

// 2. Multiply the two together and store the result in myDogAge
let myDogAge = myAge * humanDogRatio;

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

// Create two variables, firstName and lastName
let firstName = "Sanusi";
let lastName = "Muhyideen";

// Concatenate the two variables into a third variable called fullName

let fullName = firstName + " " + lastName;

// Log fullName to the console
// console.log(fullName);

let name = "Linda";
let greeting = "Hi there";

// Create a function that logs out "Hi there, Linda!" when called
function greet() {
  console.log(greeting + ", " + name + "!");
}

// greet();
