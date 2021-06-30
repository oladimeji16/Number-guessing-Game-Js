// Game values
let min = 1,
  max = 10,
  winningNum = 2,
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

    // Disable input
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    // Set MEssage
    setMessage(`${winningNum} is correct, YOU WIN!`, "green");
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //game over -lost
      // Disable input
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      // Set MEssage
      setMessage(
        `Game Over, YOU LOST!, The correct number was ${winningNum}.`,
        "red"
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


//setMessage function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}