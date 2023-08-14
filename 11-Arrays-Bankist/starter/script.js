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

const displayMovements = function (movements) {

  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}

displayMovements(account1.movements);

const createUserName = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  })
}
createUserName(accounts)
console.log(accounts);

const user = 'Ravi Aajugiya'




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



///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function(dogsJulia, dogsKate){
  const actualDogsJulia = [...dogsJulia];
  actualDogsJulia.splice(0, 1);
  actualDogsJulia.splice(-2);
  console.log(actualDogsJulia);

  let dogs = actualDogsJulia.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function(dog,i){
    dog >= 3 ? console.log(`dog no ${i} is adult`) : console.log(`dog no ${i} is puppy`);;
  })
}

checkDogs(dogsJulia, dogsKate); */



// Map, filter, reduce
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const result = movements.map(function(mov){
//   return mov * eurToUsd;
// })

const result = movements.map (mov => mov * eurToUsd);
console.log(result);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);

