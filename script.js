'use strict';
let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Start guessing...';
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.score').textContent = 20;
document.querySelector('.guess').value = null;

// console.log(document.querySelector('.guess').value);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.table(guess, typeof guess);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  }
  // When Player Wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'That is correct!';
    document.querySelector('.number').textContent = secretNumber;
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
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Number provided too high' : 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'Number provided too high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   // When guess too low
  //   else if (guess < secretNumber) {
  //     if (score)
  //       if (score > 1) {
  //         document.querySelector('.message').textContent =
  //           'Number provided too low';
  //         score--;
  //         document.querySelector('.score').textContent = score;
  //       } else {
  //         document.querySelector('.message').textContent = 'You lost the game';
  //         document.querySelector('.score').textContent = 0;
  //       }
  //   }
});

// Again button logic
document.querySelector('.again').addEventListener('click', function () {
  //Reset values of score and number
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //Restore the default messages for numbber, score and guess
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
  document.querySelector('.guess').value = '';
});
