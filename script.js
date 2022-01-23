'use strict';
let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;

//Function for stop repetting qSelector with message class
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//function for qSelector with number
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
//function for stop repetting qSelector with score class
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

displayMessage('Start guessing...');
displayScore(20);
document.querySelector('.guess').value = null;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No number');
  }
  // When Player Wins
  else if (guess === secretNumber) {
    displayMessage('That is correct!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = 'limegreen';
    document.querySelector('.number').style.width = '30 rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // When guess is different than the secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number provided too high' : 'Number is too low'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore(0);
    }
  }
});

// Again button logic
document.querySelector('.again').addEventListener('click', function () {
  //Reset values of score and number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restore the default messages for numbber, score and guess
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
  document.querySelector('.guess').value = '';
});
