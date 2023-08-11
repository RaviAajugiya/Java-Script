'use strict';

let rollDice = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');
let newGame = document.querySelector('.btn--new');

let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');

let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');

let img = document.querySelector('.dice');

let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

let score = [0, 0];
score0.innerHTML = 0;
score1.innerHTML = 0;
img.classList.add('hidden');

let dice;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const swithPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
}


rollDice.addEventListener('click', function () {
    if (playing) {
        dice = Math.floor(Math.random() * 6 + 1);
        img.classList.remove('hidden');
        img.setAttribute('src', `dice-${dice}.png`);

        if (dice !== 1) {
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).innerHTML = currentScore;
        } else {
            document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
            swithPlayer();
        }
    }

});

hold.addEventListener('click', function () {
    if (playing) {
        document.querySelector(`#score--${activePlayer}`).innerHTML = currentScore + score[activePlayer];
        score[activePlayer] += currentScore;

        if (score[activePlayer] >= 20) {
            playing = false;
            img.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            swithPlayer();
        }
    }
});

newGame.addEventListener('click', function(){
    score = [0, 0];
    currentScore = 0;

    score0.innerHTML = 0;
    score1.innerHTML = 0;

    current0.innerHTML = 0;
    current1.innerHTML = 0;
    img.classList.add('hidden');
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
});