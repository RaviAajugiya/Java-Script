'use strict';

/////////////////////////////////////////////////
// BANKIST APP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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


btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted
})

let sorted = false;
const displayMovements = function (movements, sort = false) {

  containerMovements.innerHTML = '';

  const moves = sort ? movements.slice().sort((a,b) => (a - b)) : movements;

  moves.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}

displayMovements(account1.movements);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner.toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  })
}
createUserName(accounts)
console.log(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
}

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}


const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}`

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${Math.abs(interest)}`
}


let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('success');
    labelWelcome.textContent = `welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;

    //CLEAR FIELDS
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  )
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount)
    updateUI(currentAccount)
  }
})

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value)
    === currentAccount.pin) {

    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    )
    accounts.splice(index, 1);
  }
  inputCloseUsername.value = inputClosePin.value = '';
})






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

const eurToUsd = 1.1;

// const result = movements.map(function(mov){
//   return mov * eurToUsd;
// })

const result = movements.map(mov => mov * eurToUsd);
console.log(result);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


//FIlter
const deposit = movements.filter(mov => mov > 0)
console.log(deposit);

const withdrawals = movements.filter(mov => mov < 0)
console.log(withdrawals);

//reduce
const balance = movements.reduce((acc, curr, i, arr) => {
  console.log(acc);
  return acc + curr;
}, 1000);
console.log(balance);


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. 
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const dogs = [5, 2, 4, 1, 15, 8, 3];
// const dogs = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dogs) {
  return dogs.map(age => age <= 2 ? 2 * age : 16 + age * 4)
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, age) => acc + age) / 5;
}

console.log(calcAverageHumanAge(dogs));

//find method return first element satisfying condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const accountFnd = accounts.find(acc => acc.owner === 'Jessica Davis')
console.log(accountFnd);



//some
console.log(movements);
//equality
console.log(movements.includes(-130));

//condition
const anyDeposits = movements.some(mov => mov > 100);
console.log(anyDeposits);


//every --> if all ele pass condition true
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));


//remove nested arr
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));


const accountMovements = accounts
// .map(acc => acc.movements)
// .flat();
.flatMap(acc => acc.movements);

console.log(accountMovements);

console.log(movements);

//return < 0 --> A,B (keep order)
// return > 0 --> B,A (change order)
// ascending
// movements.sort((a,b) => {
//   if(a > b) return 1;
//   if(a < b) return -1;
// })
movements.sort((a,b) => a - b);
console.log(movements);

// descending
// movements.sort((a,b) => {
//   if(a > b) return -1;
//   if(a < b) return 1;
// })
movements.sort((a,b) => b - a);

console.log(movements);


const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

// x.fill(1);
//element, start index, end index
x.fill(1,3,5);
console.log(x);


const y = Array.from({length: 7}, () => 1)
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1)
console.log(z);

const dice = Array.from({length: 100}, (cur, i) => Math.floor(Math.random() * 6 + 1))
console.log(dice);

labelBalance.addEventListener('click', function(){
  const movementsUI =  Array.from(document.querySelectorAll('.movements__value'));
  console.log(movementsUI);
})


// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ oeprator
let a = 10;
console.log(++a);
console.log(a);

// 3.
const { deposits, withdrawal } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawal: 0 }
  );

console.log(deposits, withdrawals);

// 4.
// this is a nice title -> This Is a Nice Title
const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

const convertTitleCase = function(title){
  const capitzalize = title
        .toLowerCase()
        .split(' ')
        .map((curr,i,arr) =>  !exceptions.includes(curr) ? curr[0].toUpperCase() + curr.slice(1) : curr )
        .join(' ')
  console.log(capitzalize);
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));




///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dog = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

dog.forEach(function(dog){
  dog.recFood = dog.weight ** 0.75 * 28;
})
console.log(dog);

const saraDog = dog.find(dog => dog.owners.includes('Sarah'));
console.log(saraDog);

const current = saraDog.curFood;
if(current > (saraDog.recFood * 0.90) && current < (saraDog.recFood * 1.10) ){
  console.log(`sarah's eating normal food`);
}else if(current > (saraDog.recFood * 1.10)){
  console.log(`sarah's eating more food`);
}else{
  console.log(`sarah's eating less food`);
}

// const dogSarah = dog.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
//   } `
// );

const eatTooMuch = dog.filter(dog => dog.curFood > dog.recFood)
      .flatMap(dog => dog.owners);
console.log(eatTooMuch);
const eatTooLess = dog.filter(dog => dog.curFood < dog.recFood)
      .flatMap(dog => dog.owners);
console.log(eatTooLess);

const ownersEatTooMuch = dog
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
// .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dog
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dog.some(dog => dog.curFood === dog.recFood));

console.log(dog.some(dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10));


const exFood = dog.filter(dog => dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10);

console.log(exFood);



const dogCopy = dog.slice().sort((a,b) => a.recFood - b.recFood)
console.log(dogCopy);

const dogsSorted = dog.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);