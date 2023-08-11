'use strict';
console.warn()
/* 
function calcAge(birthYear) {
    const age = 2037 - birthYear;
  
    function printAge() {
      let output = `${firstName}, you are ${age}, born in ${birthYear}`;
      console.log(output);
  
      if (birthYear >= 1981 && birthYear <= 1996) {
        var millenial = true;
        // Creating NEW variable with same name as outer scope's variable
        const firstName = 'Steven';
  
        // Reasssigning outer scope's variable
        output = 'NEW OUTPUT!';
  
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);
  
        function add(a, b) {
          return a + b;
        }
      }
      // console.log(str);
      console.log(millenial);
      console.log(add(2, 3));
      console.log(output);
    }
    printAge();
  
    return age;
  }
  
  const firstName = 'Jonas';
  calcAge(1991);
// console.log(age);
  // printAge();

   */

/* // console.log(me);
//   console.log(job);
//   console.log(year);

var me = 'Ravi';
let job = 'teacher';
const year = 2003;

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;


if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
} */


/* console.log(this);

const calcAge = function(){
    console.log(this);
}

calcAge();


const calcAgeArrow = birthYear => {
    console.log(this);
}

calcAgeArrow(2); */

/* // let firstName = 'Ravi Aajugiya'; //not work because let not in window object
// var firstName = 'Ravi aajugiya';

const ravi = {
    firstname : 'Ravi',
    year : 2003,

    calcAge: function() {
        // console.log(this);
        // console.log(2023 - this.year);

        //solution 1 function inside method use extra variable
        // because this is undefined in function

        const self = this;        
        const isMillenial = function () {
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }

        // solution 2 ==> use arrow function

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    }

    // greet: () => console.log(`Hey ${this.firstName}`),
}
// ravi.greet();
ravi.calcAge() */

/* 
//argument keyword noramal function has
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}

addExpr(5,2,3,5)


//not available in arrow function
var addArrow = (a, b) =>{ 
    console.log(arguments);
    return a + b
};

addArrow(5,2) */


/* 
//primitive type
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);


//reference type
const me = {
    name: 'Ravi',
    age: 30
}

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);


//copying object

const ravi = {
    firstName : 'ravi',
    lname : 'aajugiya',
    age : 20,
    family : ['a', 'b'],
}

const raviCopy = Object.assign({}, ravi);
raviCopy.lname = 'Ajugiya'
console.log(ravi);
console.log(raviCopy);

ravi.family.push('c');
ravi.family.push('d');
console.log(ravi);
console.log(raviCopy);
 */


function printSubsequences(arr, index, output)
{
 
  // Print the subsequence when reach
  // the leaf of recursion tree
  if (index == arr.length)
  {
   
    // Condition to avoid printing
    // empty subsequence
    if (output.length > 0) {
        // document.write(`${path}<br>`)
        console.log(output);
    };
  }
  else
  {
   
    // Subsequence without including
    // the element at current index
    printSubsequences(arr, index + 1, output);
 
    output.push(arr[index]);
 
    // Subsequence including the element
    // at current index
    printSubsequences(arr, index + 1, output);
 
    // Backtrack to remove the recently
    // inserted element
    output.pop();
  }
  return;
}
 
// Driver code
let arr = [1, 2, 3];
 
// Auxiliary space to store each path
let output = new Array();
 
printSubsequences(arr, 0, output);

