// Object-oriented programming. we have looked at object literals, but we can construct objects using what is called a constructor function.
// Lets say we want a Movie object..When you create a constructor object it should ALWAYS start with a capital, and as far as parameters, you want to pass in the properties you want to set. And when we want to pass these in (in the curly brackets), we want to set them to properties of the object. we do that with the word "this." for example, this.title, and then the title that is passed in.

// Constructor Function
function Movie(title, genre, rating, isEnglish, score) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.isEnglish = isEnglish;
    this.score = score;
}
// what is shown after the equals sign is what is passed in, the title that is passed in, the rating that is passed in, etc.

//now we can do what is called "Instantiate" an object, and we will do that with a constructor function. So we create a variable and set it to new Movie. Remember to capitalize it.  

// earlier we used new Array. That is a built-in constructor, and there are many of those built in to JavaScript, but here we are creating a custom Movie constructor, and this is going to take in the aspects of movie one. see below. Notice I am using three of the data types: strings, boolean, number

const movie1 = new Movie('Just Friends', 'RomCom', 'PG 13', true, 5);

console.log(movie1)

// this appeared in the console
// constructor.js:20 Movie {title: "Just Friends", genre: "RomCom", rating: "PG 13", isEnglish: true, score: 5}

// I will create another movie object.

const movie2 = new Movie('The Shawshank Redemption', 'Drama', 'R', true, 4);
console.log(movie2)

// this showed up in the console log...notice that it looks just like the object literal, however it's prefixed with the actual name of the object, which is "Movie"

// constructor.js:28 Movie {title: "The Shawshank Redemption", genre: "Drama", rating: "R", isEnglish: true, score: 4}