// Input = ['a','b','c']
// output : ['A','B','C']

let input = ['a','b','c'];
let upperInput = input.toString();
let inputString = upperInput.toUpperCase();
let output = inputString.split(',');


// Input = ['a','b','c'] and ['c','a','d']
// output : ['a','b','c','d']

let input1 = ['a','b','c'];
let input2 = ['a','d','c'];
let inputArr = [...input1, ...input2];
let output = new Set(inputArr);