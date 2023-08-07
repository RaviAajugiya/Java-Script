// let js = 'amazing';

// console.log(5 + 5 - 5 * 3);

// let firstName = "Ravi";
// console.log(firstName);

// let $function = 25;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);

// let year;
// console.log(typeof year);
// console.log(year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 2003;
// birthYear = 2002;
// const job;

// firstName =  Ravi;
// console.log(firstName); //make property to global obj not declare variable

// ----------operators------------

//Math operators
// const ageJonas = 5;
// console.log(ageJonas * 2, ageJonas / 10, 2**3, ageJonas - 3); //2 resto 3

// const fName = 'Ravi';
// const lName = 'Aajugiya';
// console.log(fName + ' ' + lName);


// Assignment operators

// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;

// console.log(x);

//comparison operators
// const now = 2023;
// console.log(52 > 2); // <  <== .....
// console.log(now - 1991 > now - 2018);


// let a,b;
// a = b = 25 - 10 - (-5);
// console.log(a,b);

// String and template Literals

/* const fName = 'Ravi';
const job = 'Fullstack Developer';
const birthYear = 2003;
const year = 2023;

const Ravi = `I'm ${fName}, a ${year-birthYear} old ${job}`
console.log(Ravi);

console.log('string with \n\
multiple \n\
line');

console.log(`string
with
multiple line`); */


/* const age = 12;
const isOldEnough = age >= 18;

if(isOldEnough){
    console.log("you can drive");
} else{
    console.log(`you have to wait ${18-age} year`);
}

//type converdion

const year = '2023';
console.log(Number(year));
console.log(Number('Ravi'));
console.log(typeof NaN);

//type coercion

// + convert num to string
console.log('i am ' + 20 + ' years old');

// - convert string to num
console.log('25' - 25);
console.log('25' + 25);


// 5 falsy values 0, null, '', undefined, NaN {type conversion to boolean will return false}
// all others truthy values 

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));

console.log(Boolean({}));

// use case : check if varialbe initiliazed or not

let height;

if(height){
    console.log('defined');
} else{
    console.log('undefined');
}

//for 0 it will not work

let height1 = 0;

if(height1){
    console.log('defined');
} else{
    console.log('undefined');
} */


// == and ===

// const favourite = prompt("whats is your favovrite no.");
// console.log(favourite);

// console.log(18 == '18');
// console.log(18 === '18');


// const hasLicense = true;
// const hasGoodVision = false;

// console.log(hasGoodVision || hasLicense);
// console.log(hasGoodVision && hasLicense);
// console.log(!hasLicense);

/* const day = 'wednesday';
switch (day) {
    case 'monday':
        console.log(`plan course structure`);
        console.log(`go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare videos1`);
        break;
    case 'wednesday':
    case 'thrusday':
        console.log(`Prepare videos3`);
        break;
    case 'friday':
        console.log(`Prepare videos4`);
        break;
    case 'saturday':
        console.log(`Prepare videos5`);
        break;
    case 'sunday':
        console.log(`Prepare videos6`);
        break;
    default:
        console.log('not a valid day');
} */


// conditional ternary operator
const age = 15;
age >= 18 ? console.log('you can drink') : console.log("you can't drink"); 

const drink = age >= 18 ? 'you can drink' : "you can't drink"; 
console.log(drink);

console.log(`drink status ${age >= 18 ? 'you can drink' : "you can't drink"}`);


