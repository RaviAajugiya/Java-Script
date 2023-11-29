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
// const lottery = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         if (Math.random() >= 0.5) {
//             resolve('You WIN'); //by callig this we actually fullfill promise
//         } else {
//             reject('You lost')
//         }

//     }, 2000);
// });

// lottery.then(res => console.log(res)).catch(e => console.error(e));


// const loc = async function () {
//     // more readable and 
//     const res = await fetch('https://restcountries.com/v3.1/name/india');
//     const data = await res.json()
//     console.log(data);

//     // both same 
//     fetch('https://restcountries.com/v3.1/name/india')
//         .then(res => console.log(res))

// }

// loc();

const getJSON = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Fetch failed: ${error.message}`);
    }
};

const get3country = async function (c1, c2, c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

        // console.log([data1.capital,data3.capital,data2.capital]);


        const data = await Promise.all([
            getJSON(`https://restcountries.com/v3.1/name/${c1}`),
            getJSON(`https://restcountries.com/v3.1/name/${c2}`),
            getJSON(`https://restcountries.com/v3.1/name/${c3}`),
        ]);
        console.log(data.map(d => d[0].capital));

    } catch (e) {
        console.log(e);
    }
}

get3country('portugal', 'canada', 'tanzania')

// combinators
// Promise.all => accept arr of promise return all value
// if one have error all will be rejected

// promise.race => accept arr of promise and return first req data which executed oters are ignored
// used when we want to reject all req after certain amount of time

// promise.allSettled => never sort circuit(return alll rejected also )

// promise.any => return first fullfilled promise ignore rejected once
// race not ignore reject



Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
]).then(res => console.log(res));

Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));


Promise.any([
    Promise.reject('ERROR'),
    Promise.resolve('Success'),
    Promise.resolve('Another success'),
])
    .then(res => console.log(res))
    .catch(err => console.error(err));
