
/** Object
 * 
 * Object Creation and Access
 * 
 * task 1: create an object
 *
*/

const myBook = {
    title: "The power of your subconscious mind",
    author: "Joseph Murphy",
    year: 2001,
}
// console.log(myBook);

// task 2: access the properties


// console.log(`title: ${myBook.title}, author: ${myBook.author}`);

/** Object Method
 * task 3: add a method
 */
myBook.func = function() {
    return (`title: ${myBook.title}, year: ${myBook.year}`)
},

// console.log(myBook.func());

// task 4: update method
myBook.updateYear = function(year){
    myBook.year = year
}

myBook.updateYear(2005);
// console.log(myBook);


/** Nested Objects
 * 
 * task 5: create nested object
 * name and books (an aray of book object)
 */

const library = {
    name: "readers club",
    books: [{
        title: "book 1",
        author: "author 1"
    }, {
        title: "book 2",
        author: "author 2"
    }, {
        title: "book 3",
        author: "author 3"
    }
    ]
}

// console.log(library);

/** task 6: access and log the name of the library and titles */

// console.log(library.name);

library.books.forEach(book => {
    // console.log(book['title']);
});

/** task 7: this keyword */

function getDetail (){
    return(`title: ${this.title}, year: ${this.year}`)
}

myBook.getDetail = getDetail;
// console.log(myBook.getDetail());

/** Object Iteration 
 * 
 * task 8: for...in
*/

for (const key in myBook) {
//    console.log(`${key}: ${myBook[key]}`);
}

// task 9: Object.keys, Object.values

console.log(Object.keys(myBook) );
console.log(Object.values(myBook) );
