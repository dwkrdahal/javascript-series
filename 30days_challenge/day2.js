// Operators



let num1 = 34;
let num2 = 12;

console.log("Num1: ", num1);
console.log("Num2: ", num2);

/* Arithmetic operator */

// task1: WAP to add two numbers and log the result
let result = num1 + num2;
console.log("Addition: ", result);

// task2: Substraction
result = num1 - num2;
console.log("Substraction: ", result);

//task3: multiplication
result = num1 * num2;
console.log("Multiplication: ", result)

//task4: divisiom
result = num1 / num2;
console.log("Division: ", result);

//task5: remainder
result = num1 % num2;
console.log("Remainder: ", result);

/* Assignment operator */

// task 6: +=
num1 += 2;
console.log(num1)

// task 7: -=
num2 -= 2;
console.log(num2);

/* Comparision Operator */

// task 8: < , >
if (num1 > num2) {
    console.log(num1, "is greater");
} else {
    console.log(num2, "is greater");
}
// task 9: <= , >=

if (num1 >= num2) {
    console.log(num1, "is greater or equal");
} else {
    console.log(num2, "is greater or equal");
}

// task 10: == , ===
let a = 10
let b = "10"
if (a == b) {
    console.log("both are equal");
} else {
    console.log("not equal");
}

if (a === b) {
    console.log("both are equal");
} else {
    console.log("not equal");
}

// for == type must not be the same
// for === type also need to be same



/* Logical operator */

// task 11, 12, & 13: WAP to demonstrate && , ||, !

let minAgeReq = 16;
let age = 10;
let isCitizen = true;

if (age >= minAgeReq && isCitizen) {
    console.log("you can vote");
} else {
    console.log("Sorry! you're not eligible");
}

if (age >= minAgeReq || isCitizen) {
    console.log("you can vote");
} else {
    console.log("You can");
}

/* ternary operator */

// task 14: check positive or negative
let number = 0;

(number >= 0) ? ((number == 0) ? console.log("zero") : console.log("positive")) : console.log("negative");





