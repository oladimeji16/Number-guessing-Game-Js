// Game values
let min = 10,
  max = 50,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

//ui elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign ui min max
minNum.textContent = min;
maxNum.textContent = max;

//Play again eventlisteners
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//eventlisteners for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  // Check if won
  if (guess === winningNum) {
    //Game over won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //game over -lost
      gameOver(
        false,
        `Game Over, YOU LOST!, The correct number was ${winningNum}.`
      );
    } else {
      //Game continues answer wrong
      //change border color
      guessInput.style.borderColor = "red";

      //Clear input
      guessInput.value = "";

      //Tell user its the wrong number
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

//Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  guessInput.disabled = true;
  //Add border color
  guessInput.style.borderColor = color;
  // Set MEssage
  setMessage(msg, color);

  //Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

//Get Winning Num
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
