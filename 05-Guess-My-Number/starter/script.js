'use strict';

let num = Math.floor(Math.random() * 20) + 1;
let inputNum;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    inputNum = document.querySelector('.guess').value;
    console.log(num, inputNum);
    checkNum();
    score--;
    document.querySelector('.score').innerHTML = score;
});

let checkNum = () => {
    let message = document.querySelector('.message');

    if (num == inputNum) {
        displayMessage('Correct Number');
        document.querySelector('.number').innerHTML = num;
        document.querySelector('body').style.backgroundColor = 'green'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').innerHTML = highScore;
        }
    } else if (inputNum !== num) {
        if (score > 1) {
            displayMessage(inputNum > num ? '📈 Too high!' : '📉 Too low!');
        } else {
            displayMessage('💥 You lost the game!');
        }
    }
}


document.querySelector('.again').addEventListener('click', function () {
    num = Math.floor(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
});
