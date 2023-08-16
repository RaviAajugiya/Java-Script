'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModel = document.querySelectorAll('.show-modal');

const btnCloseModel = document.querySelector('.close-modal');

const closeModel = function () {
    model.classList.add("hidden");
    overlay.classList.add('hidden');
}

const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');

const openModel = function () {
    model.classList.remove("hidden");
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click' , openModel);
}

btn.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') {
        closeModel();
    }
})

// let cl = []
// for (let i = 0; i < 3; i++) {
//     btnOpenModel[i].addEventListener('click', function(e){
//         cl.push(e.target.classList[1]) ;
//     })
// }

// btnCloseModel.addEventListener

