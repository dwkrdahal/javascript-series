// Array

/** Array creation and access */

// task 1: create an array

const myArray = [1, 2, 3, 4, 5]
// console.log(myArray);

// tassk 2: access first and last

// console.log(myArray[0]);

// console.log(myArray[myArray.length-1]);


/** Array Methods */

// task 3: push

myArray.push(9)
myArray.push(19)

// console.log(myArray);

// task 4; pop

myArray.pop()
myArray.pop()

// console.log(myArray);

// task 5: unshift

myArray.unshift(34)
myArray.unshift(134)

// console.log(myArray);

// task 6: shift

myArray.shift()
myArray.shift()

// console.log(myArray);


/** array methods */
// task 7: map method to create a new array, where number are doubled

const newArray = myArray.map( (x) => x * 2)

// console.log(newArray);

// task 8: filter method
const filteredArray = myArray.filter((x) => x % 2 == 0)

// console.log(filteredArray);


// task 9: reduce function
const sum = newArray.reduce( (acc, num) => acc + num ,0)
// console.log(`Sum is ${sum}`);

/** Array Iteration */
// task 10:  for loop

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// task 11: foreach
myArray.forEach(element => {
    // console.log(element);
});


/** multi-dimensional array */
// task 12: creating array

const multiDimArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(multiDimArr);


//task 13: accessing 

console.log(multiDimArr[2][2]);
