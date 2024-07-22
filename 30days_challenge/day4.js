/** For loop */

// task 1 : print 1 to 100
function printNumbers(from, to) {
    for (let i = from; i <= to; i++) {
        console.log(i);
    }
}

// printNumbers(1,100);

//task 2: multiplication table of 5
function multiplicationTable(number) {
    console.log("Multiplication Table of", number);
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(number, "*", i, "=", result);
    }
}

// multiplicationTable(5);

/**While Loop */

// Task 3: sum of numbers from 1 to 10 using while loop
function sumOfNumbers(from, to) {
    let sum = 0;
    while (from <= to) {
        sum += from;
        from++;
    }
    console.log(sum);
}

// sumOfNumbers(1,5);

// Task 4: print from 10 to 1
function printNumbersUsingWhile() {
    let number = 10
    while (number >= 1) {
        console.log(number);
        number--;
    }
}

// printNumbersUsingWhile()

/**do while loop */

// Task 5: print 1 to 5 using do while
function printUsingDoWhile() {
    let number = 1
    do {
        console.log(number);
        number++;
    } while (number <= 5);
}

// printUsingDoWhile();

// Task 6: CAlculate factorial
function calculateFactorial(number) {
    let factorial = 1;
    do {
        factorial *= number
        number--;
    } while (number > 0);
    console.log("Factorial is", factorial);
}

// calculateFactorial(20);

/** nested loop */

// Task 7: nested loop: printing patterns
function printPatternPyramid(rows) {
    for (let i = 1; i <= rows * 2; i += 2) {
        let line = '';

        for (j = (rows * 2 - i - 1) / 2; j >= 0; j--) {
            line += ' '
        }

        for (let j = 1; j <= i; j++) {
            line += "*"
        }
        console.log(line);
    }
}

// printPatternPyramid(10);

function printPatternPyramidOpp(rows) {
    for (let i = rows; i >= 1; i--) {
        line = ' '.repeat(rows - i) + "*".repeat(i * 2 - 1)
        console.log(line);
    }
}

// printPatternPyramidOpp(5);


/** continue and break statement */

// task 8: use of continue: print 1-10, but skip 5
function skipNumber(num){
    for(let i=1; i<=10; i++){
        if(i === num){
            continue;
        }
        console.log(i);
    }
}
// skipNumber(5);

// task 9: break: break loop in 7
function breakLoop(num){
    for(let i=1; i<=10; i++){
        if(i === num){
            break;
        }
        console.log(i);
    }
}
breakLoop(7);


