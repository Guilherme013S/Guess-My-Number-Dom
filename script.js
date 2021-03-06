'use strict';
/*console.log(document.querySelector('.message').textContent)
;
document.querySelector('.message').textContent = ' Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').parseInt(value));*/
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//passing string to Number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is not input
  if (!guess) {
    displayMessage('π« no number');

    // when it's right
  } else if (guess === secretNumber) {
    displayMessage('π Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = ssecretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage(guess > secretNumber ? 'πtoo high' : 'π too low');
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('π΅ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//restore datas
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = ' ';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
