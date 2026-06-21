const guessInput = document.getElementById("guessInput");

const guessBtn = document.getElementById("guessBtn");

const resetBtn = document.getElementById("resetBtn");

const message = document.getElementById("message");

const attemptsDisplay = document.getElementById("attempts");

const guessList = document.getElementById("guessList");

// Randomly generate secret number between 1-100
let secretNumber =
Math.floor(Math.random() * 100) + 1;

// Track guesses
let attempts = 0;

// Stores all guesses in array
let guesses = [];

//Create function
function checkGuess() {

    if (gameOver) {

    message.textContent =
        "Game over! Click Reset Game to play again.";

    return;
}

    let userGuess = Number(guessInput.value);

    // Validate input
    if (userGuess < 1 || userGuess > 100) {

        message.textContent =
            "Please enter a number between 1 and 100.";

        return;
    }
    // Count and update attempts
    attempts++;
    attemptsDisplay.textContent = attempts;

    // Store guesses in an array
    guesses.push(userGuess);

// Display guess history
let listItem = document.createElement("li");

listItem.textContent = userGuess;

guessList.appendChild(listItem);  

// Conditional logic
if (userGuess === secretNumber) {
    gameOver = true
    message.textContent =
        `Correct! You guessed the number in ${attempts} attempts.`;

}
else if (userGuess > secretNumber) {

    message.textContent = "Too High!";

}
else {

    message.textContent = "Too Low!";

}

}

// Connect the button
guessBtn.addEventListener("click", checkGuess);
//connect the reset button
resetBtn.addEventListener("click", resetGame);

// Build reset function
function resetGame() {
    gameOver = false;
    // Generate a new random number
    secretNumber = Math.floor(Math.random() * 100) + 1;

    // Reset attempts
    attempts = 0;

    // Clear array
    guesses = [];

    // Update the page
    attemptsDisplay.textContent = 0;

    message.textContent = "";

    guessInput.value = "";

    guessList.innerHTML = "";
}

// Use Enter on keyboard after typing number
guessInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkGuess();

    }

});

