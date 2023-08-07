'use strict';
/* 

// more secure code; 
// 1. by using this we can see detailed error, if we not use some errors might not be visible
// 2. restrict use of future reserved keyword

let hadLicense = false;
const passTest = true;

if(passTest) hadLicens = true; // error in normal mode no error
if(hadLicense) console.log("i can drive");

//upcoming reserved keyword ==> restrict use

const interface = 'Audio'
const private = 'Audio' */


/* function logger(){
    console.log(`My name is Ravi`);
}

//calling, running or invoking function
logger();
logger();
console.log(logger());

function fruitProcessor(appels, oranges){
    console.log(appels, oranges);
    const juice = `juice with ${appels} apples and ${oranges} orange.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 5);
console.log(appleJuice); */




/* 
//function dclaration ==> we can call before it's define
const currentAge = calcAge1(2003); //argument

function calcAge1(birthYear){  //parameters
    return 2023 - birthYear;
}

console.log(currentAge);


// function without name anonymous
// function expression ==> we can't call before declaration
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}

console.log(calcAge2(2003)); */



/* 
//Arrow function ==> shorter form of function expression

const calcAge = birthYear => 2023 - birthYear; 
console.log(calcAge(2003));

const yearUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement
    return `${firstName} retires in ${retirement}`
}

console.log(yearUntillRetirement(1991));
console.log(yearUntillRetirement(1991, 'Ravi'));
 */



/* function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(appels, oranges){
    const applePieces = cutFruitPieces(appels);
    const orangePieces = cutFruitPieces(oranges);

    // console.log(appels, oranges);
    const juice = `juice with ${applePieces} apples and ${orangePieces} orange.`;
    return juice;
}

console.log(fruitProcessor(5,10));
 */



/* const friends = ['Ravi', 'Miral', 'Yash'];
const years = new Array(1,2,3,4);

console.log(friends);
console.log(friends[2]);
console.log(friends.length);

friends[2] = 'Jay';
console.log(friends);

//array methods


const newLength = friends.push('rahul');// return new array length
console.log(friends);
console.log(newLength);

friends.unshift('john');// return new array length
console.log(friends);

friends.pop();  // return poped element
console.log(friends);

friends.shift(); // remove 1st and return it
console.log(friends);

console.log(friends.indexOf('Ravi'));
console.log(friends.indexOf('Rav')); // if not available return -1


//strict equality ===
console.log(friends.includes('Ravi')); //check element available or not
console.log(friends.includes('Rav')); */




/* 
// objects

//object literal syntex

const ravi = {
    fName : 'Ravi',
    lName : 'Aajugiya',
    age : 2023-2003,
    job : 'Fullstack Dev',
    friends : ['Miral', 'Yash', 'Rahul', 'karan']
};

console.log(ravi);
console.log(ravi['lName']); //we can put any expression
console.log(ravi.lName); // expression not work

const nameKey = 'Name';
console.log(ravi['f' + nameKey], ravi['l' + nameKey]);

// const interestedIn = prompt("what do you want to know about Ravi");
// console.log(interestedIn);

// if(ravi[interestedIn]){
//     console.log(ravi[interestedIn]);
// }else{
//     console.log('Wrong request');
// }

ravi.location = 'Rajkot';
ravi['insta'] = 'ravi_aajugiya';

console.log(ravi);

console.log(`${ravi.fName} has ${ravi.friends.length} and his best friend is ${ravi.friends[0]}`);
 */





/* const ravi = {
    fName : 'Ravi',
    lName : 'Aajugiya',
    birthYear : 2003,
    job : 'Fullstack Dev',
    friends : ['Miral', 'Yash', 'Rahul', 'karan'],
    hasDriverLicense : false,

    // calcAge : function(birthYear){
    //     return 2023 - birthYear;
    // }

    // calcAge : function(){
    //     // console.log(this);
    //     return 2023 - this.birthYear;
    // }
    
    calcAge : function(){
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary : function(){
        return `${this.fName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
    }


};

console.log(ravi.calcAge(2005));

//code optimization if we have to call this function many times then kindly set it as new property
console.log(ravi.age);
console.log(ravi.age);
console.log(ravi.age);
// console.log(ravi["calcAge"](2003));

//challenge

console.log(`${ravi.fName} is a ${ravi.age}-year old ${ravi.job}, and he has ${ravi.hasDriverLicense ? 'a' : 'no'} driver's license`);

console.log(ravi.getSummary()); */



// loops

for(let rep = 1; rep <= 10; rep++){
    console.log(`lifting weight repetition ${rep}`);
}


const raviArray = [
    'Ravi',
    'Aajugiya',
    2023-2003,
    'developer',
    ['mihir', 'Chintu', 'Tapu']
];

const types = [];

for(let i = 0; i < raviArray.length; i++){
    console.log(raviArray[i], typeof raviArray[i]);

    // types[i] = typeof raviArray[i];
    types.push(typeof(raviArray[i]));
}

console.log(types);

