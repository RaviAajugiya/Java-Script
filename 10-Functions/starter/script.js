'use strict';


//default values
/* const bookings = [];
const createBooking = function(flightNum, numPassengers = 1,price = 199 * numPassengers){
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
    console.log(bookings);
}

createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123', undefined , 2); */



//refs and val 

// const flight = 'LH234';
// const jonas = {
//     name : "Ravi Aajugiya",
//     passport : 123456789
// }

// const checkIn = function(flightNum, passenger){
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if(passenger.passport === 123456789){
//         alert('Checked in');
//     }
//     else{
//         alert('wrong passport');
//     }
// }

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);


// higher order function
/* 
const oneWord = function(str){
    return str.replace(/ /g, '').toLowerCase(); //remove spaces
}

const upperFirst = function(str){
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn){
    console.log(`original string: ${str}`);
    console.log(`transformed string: ${fn(str)}`);
    console.log(`transformed by : ${fn.name}`);
}

transformer('JavaScript is the best', upperFirst);
transformer('JavaScript is the best', oneWord);


console.log('---------------------------------------');

// const greet = function(greeting){
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`);

const greeter = greet('GM');
greeter('Jonas');
greeter('Ravi');

greet('hellow')('Jonas'); */


//apply, bind ,call 
const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },
}

lufthansa.book(239, 'Jonas');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
};


const book = lufthansa.book;

// book(23, 'Ravi Aajugiya'); //not work
book.call(eurowings, 23, 'Ravi aajugiya'); //this point to call
console.log(eurowings);

console.log('----call----');
book.call(lufthansa, 243, 'Ravi'); //this point to call


//apply accept array as para rest the same
console.log('----apply----');
const data = [243, 'Ravi'];
book.apply(lufthansa, data); //this point to call

//bind method return new function with reference of this keyword
console.log('----bind----');

const bookEW = book.bind(eurowings);
bookEW(243, 'Ravi');

const bookEW23 = book.bind(eurowings, 23, '5');
bookEW23('Ravi');



//with event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate, val) => val + val * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, .23);

console.log(addVat(100));
console.log(addVat(23));


const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));



/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),

    displayResults(type = 'array') {
        type === 'array' ? console.log(this.answers) : type === 'string' ? console.log(this.answers.join(', ')) : null;
    },

    registerNewAnswer() {
        const userInput = Number(prompt(`What is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      (Write option number)`));
        if (userInput >= 0 && userInput <= 3) {
            this.answers[userInput]++;
        } else {
            console.log('invalid option');
        }

        this.displayResults();
        this.displayResults('string');
    }
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


// IIFE --> immediately invoked function expression

(function () {
    console.log('this never run again');
})();

(() => console.log('no run'))();


//clousers

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker)


//no need of returning a function --> ex 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
h();
f();

// ex 2 --> timer
const boardPassenger = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3 groups each with ${perGroup} passenger`);
    }, wait * 1000);

    console.log(`will start boarding in ${wait} second`);
}

const perGroup = 1000; //clouser have more priority

boardPassenger(180, 3)


(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
