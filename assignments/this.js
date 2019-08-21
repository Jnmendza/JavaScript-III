/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - "this" is referring to the window if your code isn't pointing at something specific.
* 2. Implicit Binding - the keyword refers to anything left of the dot (.) and it only applies to objects with methodds
* 3. Explicit Binding - by using call, apply or bind you can invoke a function for "this"
* 4. NEW Binding - it is used to creat new objects
*
* write out a code example of each explanation above
*/

// Principle 1 
// code example for Window Binding
function tiger(){
    console.log(this.prey);
}

tiger();
const prey = 'deer';



// Principle 2
// code example for Implicit Binding

const person = {
    name: 'Jim',
    greeting: 'Whats up my name is ',
    words: function(){
        return `${this.greeting} ${this.name}`
    }
}
console.log(person.words());


// Principle 3
// code example for New Binding

function Sport(fav){
    this.game = fav;
}

let myFavSport = new Sport('Futbol');

console.log (`My favorite sport is ${myFavSport.game}.`);

// Principle 4
// code example for Explicit Binding
// .call
function tiger(){
    console.log(this.food);
}

let myTiger = {
    name: 'Tony',
    food: 'Korn Flakes'
}

tiger.call(myTiger);

// .bind
function tiger(){
    console.log(this.food);
}

let myTiger = {
    name: 'Tony',
    food: 'Korn Flakes'
}

tonyTheTiger = tiger.bind(myTiger);
tonyTheTiger();