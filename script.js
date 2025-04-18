"use strict";
/* const message = document.querySelector(".message");
const number = document.querySelector(".number");
const score = document.querySelector(".score");
message.textContent = "Hacks detected! Game shut down."
number.textContent = "heh";
 */
const body = document.querySelector("body");
const main = document.querySelector("main");
const scoreShower = document.querySelector(".score");
const message = document.querySelector(".message");
const number = document.querySelector(".number");
const guess = document.querySelector(".guess");
const highscore = document.querySelector(".highscore");
const header = document.querySelector("h1");

/* guess.addEventListener("keypress", function (e) {
  if ((e.key = "Enter")) {
    checkScore();
  }
}); */
let score = 7;
let highNum = 0;
let random = Math.floor(Math.random() * 20) + 1;
function checkScore() {
  if (guess.value <= 0 || guess.value >= 21) {
    // Invalid guess error
    body.style.backgroundColor = "palevioletred";
    number.textContent = "X";
    number.style.color = "hotpink";
    message.textContent = `ERROR! Please guess a number from 1 to 20!`;
  } else {
    if (score > 0) {
      if (0 < guess.value && guess.value <= 20) {
        console.log(`NUMBER CHEATS: ${random}`);

        // Wins the game
        if (guess.value == random) {
          header.textContent = "Right Number!";
          body.style.backgroundColor = "limegreen";
          number.textContent = random;
          number.style.color = "green";
          let trueValue = score * 100;
          if (trueValue > highNum) {
            highNum = trueValue;
            document.querySelector(".highscore").textContent = highNum;
          }
          message.textContent = `${guess.value} is correct! You've got the number!`;
          // Lucky guess
          if (score == 7) {
            number.textContent = "🍀";
            body.style.backgroundColor = "rgb(6, 44, 6)";
            header.style.color = "limegreen";
            body.style.color = "limegreen";
            main.style.color = "limegreen";
            header.textContent = "First Try!";
            message.textContent = `Lucky guess! ${guess.value} is actually correct!`;
            highNum = 9999;
            document.querySelector(".highscore").textContent = "Luck";
          }
        } else if (guess.value < random) {
          // Guesses too low
          body.style.backgroundColor = "rgb(247, 38, 38)";
          number.textContent = "⬆️";
          score--;
          scoreShower.textContent = score;
          message.textContent = `${guess.value} is too low!`;
        } else if (guess.value > random) {
          // Guesses too high
          body.style.backgroundColor = "rgb(247, 38, 38)";
          number.textContent = "⬇️";
          score--;
          scoreShower.textContent = score;
          message.textContent = `${guess.value} is too high!`;
        }
      } else {
        // Miscellanious error
        body.style.backgroundColor = "palevioletred";
        number.textContent = "X";
        number.style.color = "hotpink";
        message.textContent = `ERROR! Click the "again" button to fix the problem!`;
      }
    } else {
      // Loses the game
      body.style.backgroundColor = "rgb(114, 21, 21)";
      number.textContent = "💀";
      score = "X";
      scoreShower.textContent = score;
      message.textContent = `The correct number was ${random}! Click 'again' for another go!`;
      guess.value = "";
      header.style.color = "red";
      body.style.color = "red";
      main.style.color = "red";
    }
  }
}

function newGame() {
  score = 7;
  scoreShower.textContent = score;
  body.style.backgroundColor = "#222";
  number.textContent = "?";
  number.style.color = "#222";
  message.textContent = "Start guessing...";
  header.textContent = "Guess My Number!";
  guess.value = "";
  random = Math.floor(Math.random() * 20) + 1;
  header.style.color = "white";
  body.style.color = "white";
  main.style.color = "white";
}
