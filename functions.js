// Functions --we are going to do a function that adds two numbers .Inside the parentheses we are going to add two parameters,number1 and number2

function addNumbers(number1, number2) {
    console.log (number1 + number2);
}
//just the above will do nothing, because we have not yet called the function. We will do that below:

addNumbers(5,4)
// The output on the console is 9 as shown below, which is correct. Here we assigned the value to the variables of number1 and number2 when we called the function. We pass in 5 as number1 and 4 as number2.
// functions.js:4  9


// what if we only called the function without parameters? 
addNumbers()
// functions.js:4 NaN
// the console showed NaN - not a number. It should be a number, but it's not. That is because we had not assigned values at the beginning, so there are no numbers to add . 

// with functions we can set default values for our Parameters. Let's try this below, changing the variable names since we are on the same page and we want to show the work we have done.


function addNums(num1 = 1, num2 =2) {
    console.log (num1 + num2);
}
addNums()
// Below is what showed in the console...3, which is accurate because 1 + 2 = 3 We had already assigned default values, so we did not need to pass anything into the parentheses 
// functions.js:22   3

// let's try something else to show how we can override the default values.

function addNumbs(numb1 = 1, numb2 =2) {
    console.log (numb1 + numb2);
}
addNums(5,3)
// 8 is what shows in the console as you can see below.
// functions.js:22   8
// Even though we assigned default values to numb1 and numb2 of 1 and 2. When we called the function, we put in new parameters of 5 and 3 respectively. Those will always override the default.


// For the most part we don't want to console log inside the curly braces with a function. we would want it to return something. So instead of console log within the curly brackets as shown in the examples above , we want to type "return" and then take out the parentheses.
// function addN(n1 = 1, n2 =2) {
//     return n1 + n2;
// }
// addN(5,3)
// nothing appears in the console because we have not logged anything. If we want to log it we would just do this...

function addN(n1 = 1, n2 =2) {
    return n1 + n2;
}
console.log(addN(5,3));
// note that we wrapped the addN(5,3) in a console.log. This is what appeared in the console.
// functions.js:49 8