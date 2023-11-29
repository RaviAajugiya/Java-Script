'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const request =  new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/india');
// request.send();


// request.addEventListener('load', function(){
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
// })


// const request = fetch('https://restcountries.com/v3.1/name/eesti');
// console.log(request);

// const getData = function () {
//     fetch('https://restcountries.com/v3.1/name/india')

//         .then(response => {
//             // manually reject promise
//             if (!response.ok) {
//                 throw new Error('country not found');
//             }
//             return response.json()
//         })
//         .then(data => {
//             console.log(data);
//             // we can do 2nd ajax call here
//             return fetch('https://restcountries.com/v3.1/name/india')
//         })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         // handle all errors in promice chain or we can pass as 2nd callback function
//         // if we contry not found then promice still in accepted state promise only rejected if we ofline
//         .catch(e => console.log(e));
// }

// getData();



// // microtask(which is returned by promise has priority over callback queue)

// // IMP ===> Set timeout has trust issues
// console.log('Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('REsolved promise 1').then(res => console.log(res));
// console.log('end');




// create promise
const lottery = new Promise(function (resolve, reject) {
    
    setTimeout(function(){
        if(Math.random() >= 0.5){
            resolve('You WIN'); //by callig this we actually fullfill promise
        }else{
            reject('You lost')
        }

    },2000);
});

lottery.then(res => console.log(res)).catch(e => console.error(e));



