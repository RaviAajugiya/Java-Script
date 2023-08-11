'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = ['mon','tue','wed','thu','fri','sat'];
const openingHours = {
  // thu: {
  //   open: 12,
  //   close: 22,
  // },
  [weekDays[1]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours : openingHours,
  // ES6 feature
  openingHours,

  // order: function (starter, main) {
  //   return [this.starterMenu[starter], this.mainMenu[main]];
  // },
  order(starter, main) {
    return [this.starterMenu[starter], this.mainMenu[main]];
  },

  orderDelivery: function({
    startIndex = 1,
    mainIndex = 0,
    time = '00', 
    address = 'default'}){
    console.log(`order received ${this.starterMenu[startIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${time} at ${address}`);
  },

  orderPasta: function(ing1, ing2,ing3){
    console.log(`pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function(mainIngredient, ...otherIngredient){
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};

/* 
// -----------------------------------------------------------
//

restaurant.orderDelivery({
  time: '22:30',
  address: 'unknown'
});

//object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restName,
  openingHours: hours,
  categories: tags
} = restaurant;

console.log(restName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested
const { fri: { open: o , close: c } } = openingHours
console.log(o,c);



//array destructuring

const arr = [2,3,4];

const [x,y,z] = arr;
console.log(x,y,z);

let [main, ,secondary] = restaurant.categories;
console.log(main,secondary);

// swap main and secondary
const temp = main;
main = secondary;
secondary = temp;
console.log(main,secondary);

//by array destructuring
[main, secondary] = [secondary, main];
console.log(main,secondary);

let fname = 'Ravi';
let lname = 'Aajugiya';
console.log(fname,lname);

[fname, lname] = [lname, fname];

console.log(fname,lname);

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);


//nested destructuring
const nested = [2,4,[5,6]];

const[i,,[j,k]] = nested;
console.log(i,j,k);


//default values
const[p = 1,q = 1,r = 1] = [2,3] ;
console.log(p,q,r);


// --------------------------------------------------------------

 */


/* 
// spread operator

const arr = [1,2,3];
const badNewArray = [1,2,arr[0],arr[1],arr[2]];
console.log(badNewArray);


const newArray = [1,2, ...arr];
console.log(...arr);
console.log(newArray);

const newMenu = [...restaurant.mainMenu, 'extra'];
console.log(newMenu);

// use ==> shallow copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join --> two array
const Join = [...mainMenuCopy, ...newMenu]
console.log(Join);

//work on all iterables string, array, map, set, object(not iterable letest work)
const str = 'Ravi';
const letter = [...str, ' ', '@.']
console.log(letter);

// const ingredients = [
//   prompt('Let\'s make pasta Ing 1'),
//   prompt('Let\'s make pasta Ing 2'),
//   prompt('Let\'s make pasta Ing 3'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = {foundedIn: 1998, ...restaurant, founder : 'Ravi'};
console.log(newRestaurant);

const restaurantCopy = {...newRestaurant};
restaurantCopy.name = 'ravi';
console.log(restaurantCopy);


---------------------------------------------------------------------------------------------------

 */


/* //spread operator because right side of an assignment operator
const arr = [1,2,...[3,4]];

//rest operator because on left side of an assignment

  //use in destructuring
  const [a,b, ...other] = [1,2,3,4,5];
  console.log(a,b,other);

  const [pizza, ,risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
  console.log(pizza,risotto,otherFood);

  const { sat, ...weekdays} = restaurant.openingHours;
  console.log(sat,weekdays);

  //functions

  const add = function(...numbers) { //rest
    console.log(numbers);
  }

  add(2,3);
  add(2,3,5,6);
  const x = [5,6,7];
  add(...x)

  // ... in argument work as spade and 
  //     in parameter work as rest

  restaurant.orderPizza('mushrooms', 'onions', 'others');
  restaurant.orderPizza('mushrooms');
// -------------------------------------------------------------------------------------------------
 */


/* 
//js morden operators

//logical operators

//use any data type,return any data type, 

// short-circuiting --> if first value is truthy the return 1st not check second
// return first truthy val
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 0);
console.log(false || 'jonas');
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('--------AND--------');

// opposite of or if first value is falsy the return 1st not check second

//return first falsy val
console.log(0 && 'ravi');
console.log(7 && 'ravi');
console.log('hello' && 23 && null); 

console.log('-------------------------------------------------------------')

//nullish operator
restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

// nullish --> null and undefined
// not, 0, ''
// restaurant.numGuests if null or undefined then and only then second checked
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
 */
/* 

const rest1 = {
  name : 'Ravi',
  // numGuest : 20
  numGuest : 0
}

const rest2 = {
  name : 'Ravi',
  owner : 'aajugiya'
}

// Or assignment operator
  // rest1.numGuest = rest1.numGuest || 10;
  rest1.numGuest ||= 10;

  //logical nullish assignment operator {assign value if nullish}
  rest1.numGuest ??= 10;
  // rest2.numGuest = rest2.numGuest || 10;
  rest2.numGuest ||= 10;
  console.log(rest1,rest2);

  rest1.owner = rest1.owner && 'govt';
  rest2.owner = rest2.owner && 'govt';

  console.log(rest1,rest2);
 */


// for of loop

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (const iteam of menu) console.log(iteam);

for (const [i,el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
} */

/* 
//optional chaining

//if exist then log
if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//by optional chaining  --> if property dosent exist(null, undefined) it will return undefined 
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon','tue','wed','thu','fri','sat'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? closed;
  console.log(`on ${day}, we open at ${open}`);
}

//methods

console.log(restaurant.order?.(0,1) ?? 'Methods not exist');
console.log(restaurant.orderx?.(0,1) ?? 'Methods not exist');

const users = [{name: 'Ravi', email: 'aajugiyaravi@gmail.com'}];

console.log(users[0]?.name ?? 'array empty'); */


/* //looping object

const properties = Object.keys(openingHours);
console.log(properties);

//keys
for(const day of Object.keys(openingHours)){
  console.log(day);
}

//values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open,close}] of entries){
  console.log(`on ${key} we open at ${open} close at ${close}`);
}

 */

/* 
//set and map

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'risotto','pasta', 'pizza'])
console.log(orderSet);

console.log(new Set('pasta'));


console.log(orderSet.size);
console.log(orderSet.has('pizza'));
console.log(orderSet.add('pizza1'));
console.log(orderSet.delete('pizza1'));
// console.log(orderSet.clear());
console.log(orderSet);


for (const order of orderSet) {
  console.log(order);
}

const num = [1,2,2,3,3,5,2,4,0];
const uniqueNum = [...new Set(num)];
console.log(uniqueNum);

//find unique num
console.log(new Set(num).size);




//Map

    //create empty and set values
    const rest = new Map();
    rest.set('name','Ravi Aajugiya');
    rest.set(1, 'abcd');
    rest.set(2, 'pqrs');
    console.log(rest);

    rest
      .set('categories', ['a','b','c','d'])
      .set('open', 11)
      .set('close', 23)
      .set(true, 'We are open')
      .set(false, 'We are closed');


    console.log(rest.get('name'));
    console.log(rest.get(true));
    console.log(rest.get(1));

    const time = 12;
    console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

    console.log(rest.has('categories'));
    console.log(rest);
    console.log(rest.size);
    rest.delete(2);
    console.log(rest.size);
    rest.clear();
    console.log(rest);


    //this will not work
    // rest.set([1,2], 'test');
    // rest.set(document.querySelector('h1'), 'Heading');


    console.log(rest.get([1,2]));

    const arr = [1,2];
    rest.set(arr, 'Test');
    console.log(rest.get(arr));
    console.log(rest);

    //create set by passing array

    const question = new Map([
      ['que1', 'what is first programing language'],
      [1,'C'],
      [2,'Java'],
      [3,'JS'],
      ['correct', 3],
      [true, 'correct'],
      [false, 'try again'],
    ]);

    console.log(question);

    //convert obj to map
    console.log(Object.entries(openingHours));
    const hoursMap = new Map(Object.entries(openingHours));
    console.log(hoursMap);


    console.log(question.get('que1'));
    for(const [key,value] of question){
      if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
    }

    // const answer = Number(prompt('Your answer'));
    // console.log(answer);

    // console.log(question.get(question.get('correct') == answer));

    //map --> array
    console.log([...question]);

    console.log(question.entries());

     */

const airLine = 'Tap Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('Ravu'[2]);
console.log('Ravu'.length);

console.log(airLine.indexOf('r'));
console.log(airLine.lastIndexOf('r'));
console.log(airLine.indexOf('Air'));

console.log(airLine.slice(4));
console.log(airLine.slice(4,9));

console.log(airLine.slice(0,airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));

console.log(airLine.slice(-2));
console.log(airLine.slice(1,-2)); //cut last two char

const checkSeat = function(seat){
  const s = seat.slice(-1);
  s === 'B' || s === 'E' ? console.log('middle') : console.log("unluckey");
}

checkSeat('11B');
checkSeat('11C');
checkSeat('11E');

//methods

console.log(airLine.toLocaleLowerCase());
console.log(airLine.toLocaleUpperCase());

// let email = '     r vi@gma il.com';
const loginemail = '     ravi@gma il.com';

const lowerEmail = loginemail.toLocaleLowerCase();
const trimEmail = lowerEmail.trim();
console.log(trimEmail);

let price = '5$$$';
console.log(price.replace('$','!'));
console.log(price.replaceAll('$','!'));


const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('A320'));


console.log('a+bc+cd'.split('+')); //op as array

const newName = ['mr', 'a', 'b'].join('.');
console.log(newName);


//padding
const message = 'go to 23';
console.log(message.padStart(25,'5'));
console.log(message.padEnd(25,'5'));

//repeat

const message1 = 'Bad weather.....';
console.log(message1.repeat(5));


// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});



// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}