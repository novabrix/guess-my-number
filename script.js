"use strict";
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
let secretNum = Math.floor(Math.random() * 20) + 1;
function author(miscText) {
  return (message.textContent = miscText);
}
function backArtist(miscColor) {
  return (body.style.backgroundColor = miscColor);
}
function numChange(misc) {
  return (number.textContent = misc);
}
function scoreUpdate() {
  return (scoreShower.textContent = score);
}

function checkScore() {
  if (guess.value <= 0 || guess.value >= 21) {
    // Invalid guess error
    backArtist("palevioletred");
    numChange("X");
    number.style.color = "hotpink";
    author(`ERROR! Please guess a number from 1 to 20!`);
  } else {
    if (score > 0) {
      console.log(`NUMBER CHEATS: ${secretNum}`);
      // Wins the game
      if (guess.value == secretNum) {
        header.textContent = "Right Number!";
        backArtist("limegreen");
        numChange(secretNum);
        number.style.color = "green";
        let trueValue = score * 100;
        if (trueValue > highNum) {
          highNum = trueValue;
          document.querySelector(".highscore").textContent = highNum;
        }
        author(`${guess.value} is correct! You've got the number!`);
        // Lucky guess
        if (score == 7) {
          numChange("🍀");
          backArtist("rgb(6, 44, 6)");
          header.style.color = "limegreen";
          body.style.color = "limegreen";
          main.style.color = "limegreen";
          header.textContent = "First Try!";
          author(`Lucky guess! ${guess.value} is actually correct!`);
          highNum = 9999;
          document.querySelector(".highscore").textContent = "Luck";
        }
      } else if (guess.value != secretNum) {
        // Guesses wrong number
        backArtist("rgb(247, 38, 38)");
        score--;
        scoreUpdate();
        if (guess.value < secretNum) {
          numChange("⬆️");
          author(`${guess.value} is too low!`);
        } else if (guess.value > secretNum) {
          numChange("⬇️");
          author(`${guess.value} is too high!`);
        }
      }
    } else {
      // Loses the game
      backArtist("rgb(114, 21, 21)");
      numChange("💀");
      score = "X";
      scoreUpdate();
      author(
        `The correct number was ${secretNum}! Click 'again' for another go!`
      );
      guess.value = "";
      header.style.color = "red";
      body.style.color = "red";
      main.style.color = "red";
    }
  }
}

function newGame() {
  score = 7;
  scoreUpdate();
  backArtist("#222");
  numChange("?");
  number.style.color = "#222";
  author("Start guessing...");
  header.textContent = "Guess My Number!";
  guess.value = "";
  secretNum = Math.floor(Math.random() * 20) + 1;
  header.style.color = "white";
  body.style.color = "white";
  main.style.color = "white";
}
