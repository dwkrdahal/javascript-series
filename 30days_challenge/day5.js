//----- FUNCTION ------//

/** Function Declaration */

// task 1: function to check even or odd
function checkNumber(number) {
    if (number % 2 == 0) {
        return "even";
    } else {
        return "odd"
    }
}

// console.log(checkNumber(172));

// task 2: calculate square
function calculateSquare(number) {
    return number * number;
}

// console.log(calculateSquare(9));

/**function expression */

// task 3: find the maximum of two
const findMaximum = function (num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2
    }
}

// console.log(findMaximum(23,34));

/** Immediately Invoked Function Expression (IIFE) */

// (function (){
//     console.log("will run immediately")
// })();

//task 4: concatenate two strings

const concatenateString = function (str1, str2) {

    // //1. using + operator
    // let fullString = str1+str2;
    // return fullString;

    // //2. using += operator
    // str1 += str2
    // return str1;

    // //3. using template literals
    // return `${str1} ${str2} `

    //4. using concat method
    return str1.concat(str2)
}

// console.log(concatenateString("ram", "shyam"));

/** Arrow Function */

//task 5: sum of two numbers
const sum = (num1, num2) => {
    return num1 + num2;
}

// console.log(sum(9, 19));

// task 6: if strings contains a specific characters
const ifContains = (key, string) => {
    if (string.includes(key)) {
        return true
    } else {
        return false
    }
}

// console.log(ifContains("sgr", "ram is great"));

/** function parameter and default value */

//task 7: two param, one default
const productofTwoNumbers = function (number1, number2 = 5 ){
    return number1 * number2;
}

// console.log(productofTwoNumbers(5));

//task 8: greet the customer
const greet = function (name, age = 24){
    return `Hello ${name}`;
}

// console.log(greet("Ram"));

/** Higher-orderfunction */

// task 9: one function and a value
function repeatFunction(fn, times){
    return function () {
        for(let i=0; i<5; i++){
            fn();
        }
    }
}

function sayHello(){
    console.log("Hello");
}

const sayHelloFiveTimes = repeatFunction(sayHello, 5)

// sayHelloFiveTimes();

//task 10: 2 functions and a value

function applyFunction(fn1, fn2, value){
    const result1 = fn1(value);
    const result2 = fn2(result1);
    return result2;
}

function double(x){
    return x*2;
}

function square(x){
    return x*x;
}

const value = 6;
const finalResult = applyFunction(double, square, value);

console.log(finalResult);


