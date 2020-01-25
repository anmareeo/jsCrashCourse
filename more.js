// Conditionals --simple if statements I am going to try using let this time,

// let x = 10;

// if(x === 10) {
//     console.log('x is 10')
// }
//more.js:6 x is 10

// Here is what is going on, we created a variable of x and gave it a value of 10. Then we told the browser that if x is equal to 10, that it needs to return a string of text that states, 'x is 10'. The browser followed the instructions, looking for the value of x, and when it found that x indeed was equal to 10, it returned the text. 
// Probably best to just always use === instead of ==. To be explained later  but it has to do with matching the data types.

// now we will add an else statement to tell the browser what to do if x is not equal to 10, and we will change the value of x.

// let x = 20;

// if(x === 10) {
//     console.log('x is 10')
// } else {
//     console.log('x is NOT 10')
// }

// more.js:19 x is NOT 10

// Now we will add an else if. We can add as many else ifs as we want. So we are instructing the browser to check the value of x and return a different statement depending on the value.

// let x = 20;

// if (x === 10) {
//     console.log('x is 10')
// } else if (x > 10) {
// console.log('x is greater than 10')
// } else {
//     console.log('x is less than 10')
// }

// more.js:32 x is greater than 
// the statement will change when we change the value of x
// We can also do multiple condtitions. So let's say we wanted to have another variable called y--not practical, but just for simplicity.

// first we will try to see if one of the following is true based on the variables. So in the if statement, we will use or. The symbol for or is double pipe characters || so we want to see if x is greater than 5 OR if y is greater than 10.

// let x = 4;
// let y = 10

// if (x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10')
// }
// nothing will come back on the console because x is not greater than 5 and y is not greater than 10. It is 10, but not greater than 10. So let's see what happens when we change the values of one of the variables.

// let x = 4;
// let y = 11;

// if (x > 5 || y > 10) {
//     console.log('x is more than 5 or y is more than 10')
// }

// more.js:55 x is more than 5 or y is more than 10
// since  at least one of those statement is true, the text showed up. But if we change the || to &&, which means and, Both statements must be true in order for the text to appear.

// let x = 4;
// let y = 11;

// if (x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10')
// }

// Nothing appeared in the console because both have to be true, and only one is. Now let's change x to make both statements true.

let x = 6;
let y = 11;

// if (x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10')
// }

// more.js:74 x is more than 5 or y is more than 10
// it worked
// The above method is better than nesting if statements like this:

// if (x > 5) {
//     if(y > 10) {
// } 
// }
// This is just a harder way of doing the same thing.