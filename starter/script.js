 'use strict';

const player0 = document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const newDice = document.querySelector('.btn--new');
const holdDice = document.querySelector('.btn--hold');
const currentDice0 = document.getElementById('current--0');
const currentDice1 = document.getElementById('current--1');
const currentS = document.querySelector('.current-score');

let currentScore = 0;
let activePlayer = 0;
const scores = [0 , 0];

dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0; 

let current0 = 0;
let current1 = 0;

// function 1

const adding = function ( ) {
        currentScore = currentScore + randomDice ;
        document.getElementById(`current--${activePlayer}`).textContent = currentDice0 ;
}

// the main function 

rollDice.addEventListener('click', function () {
    
    let randomDice = Math.trunc(Math.random() * 6) + 1 ;
    dice.classList.remove('hidden');
    
    if (randomDice !== 1) {

        currentScore = currentScore + randomDice ;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore ;
    
    } else {

        document.getElementById(`current--${activePlayer}`).textContent = 0 ;
        activePlayer = activePlayer === 0 ? 1 : 0 
        currentScore += randomDice ;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        
        
    }
});


