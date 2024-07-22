// Activities 1: If-else

// task 1: positive, negative or zero
checkPositive(-9);

function checkPositive(number){
    if (number > 0) {
        console.log("it is positive");
    } else if (number < 0) {
        console.log("it is negative");
    } else {
        console.log("zero");
    }
}


// task 2: check eligibility

checkEligibility(17);

function checkEligibility(age){
    if (age >= 18) {
        console.log("you can vote");
    } else {
        console.log("sorry, you cannot vote");
    }
}



/** nested if-else */

// task 3: greatest among three using nested if-else

findGreatestNumber(12, 234, 23);

function findGreatestNumber(a, b, c) {
    if (a > b) {
        if (a > c) {
            console.log(a, " is greatest");
        } else {
            console.log(c, " is greatest");
        }
    } else {
        if (b > c) {
            console.log(b, " is greatest");
        } else {
            console.log(c, " is greatest");
        }
    }
}


/** Switch Case */
// task 4: switch case for week days

findDayOfWeek(7);

function findDayOfWeek(day) {
    switch (day) {
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("monday");
            break;
        case 3:
            console.log("tuesday");
            break;
        case 4:
            console.log("wednesday");
            break;
        case 5:
            console.log("thursday");
            break;
        case 6:
            console.log("friday");
            break;
        case 7:
            console.log("saturday");
            break;

        default:
            console.log("there are only 7 days ina week");
            break;
    }
}


// task 6: switch case to assign a grade
findGrade(3.45)

function findGrade(score) {
    switch (true) {
        case (score <= 4 && score > 3.6):
            console.log(score, "A");
            break;

        case (score <= 3.6 && score > 3.2):
            console.log(score, "B");
            break;

        case (score <= 3.2 && score > 2.8):
            console.log(score, "C");
            break;

        case (score <= 2.8 && score > 2.4):
            console.log(score, "D");
            break;

        case (score <= 2.4 && score > 2.0):
            console.log(score, "E");
            break;

        case (score <= 2.0):
            console.log(score, "F");
            break;

        default:
            console.log(score, "Invalid Score");
            break;
    }
}

/** Ternary operator */
// task 6: cj\heck odd or even

isOddEven(50);

function isOddEven(number) {
    (number % 2 == 0) ? console.log(number, "even") : console.log(number, "odd");
}



/**Combining Conditions */
//task 7: check leap year

isLeapYear(100);

function isLeapYear(year) {
    if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
        console.log(year, "is leap year");
    } else {
        console.log(year, "is not leap year");
    }
}


