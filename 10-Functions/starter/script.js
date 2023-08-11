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
    airline : 'lufthansa',
    iataCode: 'LH',
    bookings: [],

    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
        );
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
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
bookEW(243,'Ravi');

const bookEW23 = book.bind(eurowings, 23, '5');
bookEW23('Ravi');



//wit event listener

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application

const addTax = (rate,val) => val + val * rate ;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, .23);

console.log(addVat(100));
console.log(addVat(23));


const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));




    










