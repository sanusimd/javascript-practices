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

function calFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

let result = calFahrenheit(0);
let result1 = calFahrenheit(20);
let result2 = calFahrenheit(40);

console.log(result);
console.log(result1);
console.log(result2);
