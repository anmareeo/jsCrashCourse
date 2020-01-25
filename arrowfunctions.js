// Arrow functions are simpler. Here we will change the syntax of what we had in the functions file to arrow syntax. Here is the regular function syntax. We will again change the variable names since these practices are all in the same folder albeit different files. the console will still show what is in those files under those variable names.



// function addNs(ns1 = 1, ns2 = 2) {
// return ns1 + ns2;
// }
// console.log(addNs(5,3))
// note that we wrapped the addN(5,3) in a console.log. This is what appeared in the console.
// functions.js:49 8

// instead of using the keyword "function," we would name it as a variable and then put an equals sign after the variable. Then we put a fat arrow (=>) after the parentheses

const addNs = (ns1 = 1, ns2 = 2) => {
    return ns1 + ns2;
}
console.log(addNs(5,3))

// Here is what shows in the console. So it is exactly the same as the commented out function that begins on line 5.
// arrowfunctions.js:15 8

// Now let's change it back to having the console.log syntax from before(note the differences with the  and one that starts at line 14, and the one that starts on line 23, to show why arrow functions nice. 
const addNus = (nus1 = 1, nus2 = 2) => {
    console.log (nus1 + nus2);
}
addNus(5,3)

// arrowfunctions.js:24 8

// Since we only one expression, meaning we don't have variable being assigned or anything else happening, we don't even need the curly braces. We can just do  all on one line as we will show below. (I will again change the variable names)

const addNu = (nu1 = 1, nu2 = 2) => console.log (nu1 + nu2);
addNu(5,3)
// below is what shows on the console, which is the same as above
// arrowfunctions.js:30 8

// // now if we want to return something, all we have to do is get rid of the console.log after the => and put the console log at the end and don't use the word return or it won't work. If you do use the word return you would have to put the curly braces back as shown on line 42.
const addNb = (nb1 = 1, nb2 = 2) => nb1 + nb2
console.log (addNb(5,3))
// arrowfunctions.js:39 8

// const add = (nb1 = 1, nb2 = 2) => {return nb1 + nb2}
// console.log (addNb(5,3))
// arrowfunctions.js:43 8
// also, if you only have one parameter(we have two), you don't even need the parentheses. Just do this.
const addAN = an1 => an1 + 5
console.log(addAN(5))
// arrowfunctions.js:47 10
// note how the syntax changes. That will take some time to for me to learn. 

// This is great to use with "for each"

todos.forEach((doIt) => console.log(doIt))
// arrowfunctions.js:53 {id: 3, text: "eat lunch", isComplete: true}
// the => also has an advantage when combined with the lexical "this" which we will not cover right now.