//Primitive Data types string, number, boolean, null, undefined

// const name = 'Anmaree';
// const age = 29;
// const rating = 4.5
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof name)

//Concatenation. You can use the plus sign to concatenate a string of text that incorporates the variables below.
// const name = 'Anmaree';
// const age = 29;

// console.log('My name is ' + name + 'and I am '+ age)

// Template String is easier to use. Here is the syntax.
// console.log(`My name is ${name} and I am ${age}.`);
// Be sure to use the back ticks instead of the quotes, and make sure there is no punctuation inside the curly brackets. Only the variable goes there. Note that the template literal makes it much easier because you only have to put one set of back ticks instead of many quotation marks to concatenate. So this...${} alerts to change the contents into a string and to position that string in that very spot.
//We can also assign the above sentence to a variable. See below.
// const hello =`My name is ${name} and I am ${age}.`;
// console.log(hello);

//Strings
// if we want to find out how many characters are in the string, we can use the length property (the variable.length)
// const s = 'Hello World!';
// console.log(s.length). 
// In the console log appears 12.
// length is a property, and it does not have parentheses after it (). If it has () after it, it's a method. A method is a function that is associated with an object. An example of a method would be...
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
//but you must have the parentheses to perform this action
// console.log(s.substring(0,5).toUpperCase());
//substring is another method. This takes in two indexes, where you want to start and where you want to end(0,5). The count always begins at 0, and then it will end just before 5. Also note above that you can tack on other methods. So the output from the above console.log was HELLO.

//We can also split a string into an array using the method split. As a parameter this takes on whatever you want to split by. If you want to split by letter, you would just put empty quotes without a space. See below.
// console.log(s.split(''))
// This gives us an array with 12 values, each character representing a value. Here is what the above c.l produced:
// ["H", "e", "l", "l", "o", etc...]
// this may not seem very handy, but here is where it is useful, if you have a list of items and you want them in an array, for example:
// const s = 'technology, computers, it, code';
// you can put these in an array with the following code:
// console.log(s.split(', '))
//just remember to have the comma space. This comes in handy if you need to insert into a database or search.

// Arrays are variables that hold multiple values. Here is a way to create an array.
// const numbers = new Array(1,2,3,4,5);
// console.log(numbers)

// new is a keyword, so when you see the word new and a word after it, it is a constructor. The above cl gives us an array of five values. [1,2,3,4,5]. So all that changed is that it is now in an array (using the square brackets[]
// there is an easier way to create an array, by just setting the brackets from the start as follows:
// const fruits = ['apples', 'oranges', 'pears'];
// console.log (fruits) 
// This cl produced an array called fruits that looks exactly like what is above. In JavaScript you can have multiple data types in the same array, so you could have numbers, booleans, strings, etc all in the same array. Most languages require the same data type, so we have a lot of freedom with JS.

// let's pretend we just want to access one in the array, we can just find it by index number, shown below. 
const fruits = ['apples', 'oranges', 'pears'];
// console.log (fruits[1]). This brought up oranges because the index starts at zero, so apples is zero, and oranges is one. This is handy for if you need to add another fruit to the Array. just do the following:

fruits[3] = 'grapes'
console.log(fruits)
// The console log added grapes to the #3 index slot  the last in the Array......(4) ["apples", "oranges", "pears", "grapes"]but this method of adding to the end of a list has a problem in that we don't always know how many are in the array. So there is a method called push that we can use.
fruits.push('cherries')
console.log(fruits)
// (5) ["apples", "oranges", "pears", "grapes", "cherries"]That push method will just add an item to the end of an Array. the cl showed that cherries was added to the end. But what if we wanted to add to the beginning? we can use the unshift method.
fruits.unshift('lemons')
console.log(fruits)
// (5) ["lemons", "apples", "oranges", "pears", "grapes"] the above cl added lemons to the beginning of the array. There are many different array methods. If you want to take the last item off the array, do this.
fruits.pop()
console.log(fruits)
// this took cherries off of the Array. it popped the last item off of the Array.

// if you want to check to see if something is an array you can do
console.log(Array.isArray(fruits))
// Just pass in the name of the array into the parentheses. Cl pulled up "true"
// if we were to pass in a String, we would get false because it is not an Array.
console.log(Array.isArray('hi'))
// the above cl brought up false, because it is not an Array.

// if you want to get the index of a certain value, you can use indexOf
console.log(fruits.indexOf('oranges'))
// the above cl brought up 2, because it is the third in the Array

//Object literals are essentially key value pairs...we can even add an array or an embedded object(an object within an object), such as the address as shown below. Just don't forget to put commas after each
const person = {
    firstName: 'Anmaree',
    lastName: 'Osmond',
    age: 29,
    hobbies: ['music', 'games', 'shopping'],
    address: {
        street: '555 Main St',
        city: 'Orlando',
        state: 'FL'

    }
}
// console.log(person)
// the above cl brought up all the data associated with the person Object
//if we want to access a single value, we can use the dot syntax...
// console.log(person.age)
// this logged 29. You can also access more than one by using a comma...
// console.log(person.age, person.hobbies, person.address)
// the cl brought up all of the above info. you can separate different logs with commas. test, try to get games to print out in the console.
// console.log(person.hobbies[1])
// games is what appeared in the log
// console.log(person.address.city)
// this shows Orlando

//Destructuring. If we wanted to create variables from the info above, we can do the following...
// const {firstName, lastName} = person
// so think of this not as assigning something but pulling these out of this person Object.
// console.log(firstName)
// the above showed Anmaree as it should. If it is an embedded object, such as an address, we can do this...
// const {firstName, lastName, address: {city}} = person
// console.log(city)
// we can add properties.
person.hair = 'blue';
console.log(person)

// {firstName: "Anmaree", lastName: "Osmond", age: 29, hobbies: Array(3), address: {…}, …}
// firstName: "Anmaree"
// lastName: "Osmond"
// age: 29
// hobbies: (3) ["music", "games", "shopping"]
// address: {street: "555 Main St", city: "Orlando", state: "FL"}
// hair: "blue"
// __proto__: Object

const todos = [
{
    id: 1,
    text: 'go to store',
    isComplete: true
},
{
    id: 2,
    text: 'go to Gregs',
    isComplete: false
},
{
    id: 3,
    text: 'eat lunch',
    isComplete: true
}
];
console.log(todos) 
// (3) [{…}, {…}, {…}]
// 0: {id: 1, text: "go to store", isComplete: true}
// 1: {id: 2, text: "go to Gregs", isComplete: false}
// 2: {id: 3, text: "eat lunch", isComplete: true}
// length: 3
// __proto__: Array(0)

// task is to get "go to Gregs" to show in the console.
console.log(todos[1].text) 
//the above showed "go to Greg's" The info above is an array of objects. To select an item in an array, just use the index number and then .whatever the text property is. In this case it was "text" main.js:157 go to Gregs

// JSON a data format used a lot when you are sending data to a server. Data is sent to a server using JSON format and received in JSON format. it is similar to object literals. Notice below the difference:
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// main.js:162 [{"id":1,"text":"go to store","isComplete":true},{"id":2,"text":"go to Gregs","isComplete":false},{"id":3,"text":"eat lunch","isComplete":true}]
// the above turned the formatting into JSON format. This was done using the method JSON.stringify and then we just pass in the todos variable. This is ready to send to a server.

// For loops  they get three parameters passed into the parentheses and separated by semicolons, not commas(1; 2; 3) with the first parameter being the assignment of the iterator or the variable, the second is the condition that needs to be met, and the third is the increment.


for(let i =0; i < 10; i++) {
    console.log(i)
}
// main.js:171 0
// main.js:171 1
// main.js:171 2
// main.js:171 3
// main.js:171 4
// main.js:171 5
// main.js:171 6
// main.js:171 7
// main.js:171 8
// main.js:171 9
// i++ just adds one to the variable
// whatever we put in the above is going to run until all the conditions are met...so for example, once i is no longer less than ten, the loop will stop running(going through iterations). Note tht the console.log is run inside the {} 

// What happened with the above for loop is that it ran--started at zero, it did an iteration, it got to 1 because of the increment(i++). It went through again and got to 2 and so on . Once it got to 9, the condition of i being less than 10 is no longer true, so it stops running at the number just less than 10. If we want 10 included we would just say "greater than or equal to (i <=10)"
// We could console.log whatever we want, such as the following that has the info from above. 

for(let i =0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`)
}
// main.js:190 For Loop Number: 0
// main.js:190 For Loop Number: 1
// main.js:190 For Loop Number: 2
// main.js:190 For Loop Number: 3
// main.js:190 For Loop Number: 4
// main.js:190 For Loop Number: 5
// main.js:190 For Loop Number: 6
// main.js:190 For Loop Number: 7
// main.js:190 For Loop Number: 8
// main.js:190 For Loop Number: 9
// So in the second for loop, we were just adding a string of text. In the first cl we got just the numbers 0-9, but the second time it was For Loop Number: 0, For Loop Number: 1, etc.

// While Loops
// Similar to For loops, but we set the variable outside the loops....while just takes in the conditions (). Be sure to increment the i, otherwise the condition will never be met. i will never be higher than 10 and so it will just be looping and looping, looking for the condition to be met.

let i = 0;
while(i <10) {
    console.log(`While Loop Number: ${i}`);
    i++
}
// main.js:209 While Loop Number: 0
// main.js:209 While Loop Number: 1
// main.js:209 While Loop Number: 2
// main.js:209 While Loop Number: 3
// main.js:209 While Loop Number: 4
// main.js:209 While Loop Number: 5
// main.js:209 While Loop Number: 6
// main.js:209 While Loop Number: 7
// main.js:209 While Loop Number: 8
// main.js:209 While Loop Number: 9
// looping through arrays. We can take the for loop above and replace the number to an array of items, for example the todos array combined with the length property. That means it would loop through the list of todo items until it reaches the length or end of the array. But note that the index here is not a number, it is the variable i, the iteration. But i = 0, so it is doing the same thing. looping through each index in the array until the end of the todos array.

for(let i =0; i < todos.length; i++) {
    console.log(todos[i].text)
}
// main.js:225 go to store
// main.js:225 go to Gregs
// main.js:225 eat lunch
// The console.log above showed the three to do items from above: go to store, go to Gregs, eat lunch. It did not bring up the whole array, because we only asked for the text part of it with .text.
// this is not the best way to loop through an array. We have a method called a For Of loop: Note that we are creating a new variable called doIt (that variable can be whatever we want) and then adding of and the name of the arrray, which is todos
for(let doIt of todos) {
    console.log(doIt)
}
// main.js:233 
// {id: 1, text: "go to store", isComplete: true}
// id: 1
// text: "go to store"
// isComplete: true
// __proto__: Object
// this console log showed all the info about the todos array, including the id and completion status. If we only want the actual to do, that part of the array is text. See below.
for(let doIt of todos) {
    console.log(doIt.text)
}

// main.js:243 go to store
// main.js:243 go to Gregs
// main.js:243 eat lunch

// High Order Array Methods, which is the best method to do any kind of iteration with arrays. The high order array methods are: For Each (which just loops through the arrays); Map, which allows us to create a new array from an array; and filter, which will allow us to create a new array based on a condition. These high order array methods take in as a parameter a function. pass in a function like this: function() {} within those parentheses are what is called a callback function. The callback function can take in multiple parameters, but the first one you want to use is the variable that you want to use as each item. in our case each to-do

todos.forEach(function(doIt){
    console.log(doIt.text);
})
//This is what shows up in the console 
// main.js:253 go to store
// main.js:253 go to Gregs
// main.js:253 eat lunch
// to test this out, i will select by id instead of text:

todos.forEach(function(doIt){
    console.log(doIt.id);
})

// main.js:262 1
// main.js:262 2
// main.js:262 3

// now i will check by completion status
todos.forEach(function(doIt){
    console.log(doIt.isComplete);
})

// main.js:271 true
// main.js:271 false
// main.js:271 true
// The above three For Each methods looped through the array to find the Data



// Map is formatted the same way, taking in a function and passing in whatever variable you want to use. With Map, it returns an array, so we want to assign a variable so the array that will be created has a name. We want to loop through and returnan array of just the text values of the todos array. We want to tell it to return doIt.Text. We give those instructions inside the curly brackets. In the curly brackets is where instructions go. And then we console log the name of the new variable.

const doItText = todos.map(function(doIt){
    return doIt.text
})
    console.log(doItText);
 
// main.js:286 (3) ["go to store", "go to Gregs", "eat lunch"]
// the line above shows what appeared in the console...so it worked. I created a new array from an existing array using the map method. I will practice now by logging arrays of the id and the isComplete
const doItId = todos.map(function(doIt){
    return doIt.id
})
    console.log(doItId);
// main.js:293 (3) [1, 2, 3]

const doItIsComplete = todos.map(function(doIt){
    return doIt.isComplete
})
    console.log(doItIsComplete);

// main.js:299 (3) [true, false, true]