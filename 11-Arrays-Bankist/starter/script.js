'use strict';

/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/////////////////////////////////////////////////
// LECTURES



/////////////////////////////////////////////////


/* 
//array methods

let arr = ['a','b','c','d','e'];


//not change original array return new array
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -1));
console.log(arr.slice()); //make copy of arr

arr = ['a','b','c','d','e'];
//splice make changes in array and return removed element
console.log(arr.splice(-1)); 
console.log(arr.splice(1,2)); 
console.log(arr);

//reserve --> mutate original array
arr = ['a','b','c','d','e'];
console.log(arr.reverse());

//concat --> return new arr
const arr2 = ['f','g','h','i','j','k']; 
const letters = arr.concat(arr2);
console.log(letters,arr2);

//join
console.log(letters.join('-'));
 */



/* const arr = [23,11,64];
console.log(arr[0]);

//can use negative index //also work on string
console.log(arr.at(0));
console.log(arr.at(-1));

console.log(); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//break and continue work for of
for (const [i, movement] of movements.entries()) {
  movement > 0 ? console.log(`Movement ${i + 1} : you deposited ${movement}`) : console.log(`Movement ${i + 1} : you widhdrow ${Math.abs(movement)}`);;
}

console.log('----forEach----');
//break and continue not work
movements.forEach(function (movement, i, arr) {
  movement > 0 ? console.log(`Movement ${i + 1} : you deposited ${movement}`) : console.log(`Movement ${i + 1} : you widhdrow ${Math.abs(movement)}`);;
});


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(value,key,map){
  console.log(`${key}: ${value}`);
  console.log(map);
})

//set
const currenciesUnique = new Set(['USD', 'GBP','USD', "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set){
  console.log(`${key}: ${value}`);
  console.log(set);
})
   */