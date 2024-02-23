// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 20) + 1;

// Get the input field and message area
let guessField = document.getElementById("guessField");
let message = document.getElementById("message");

// Function to check the guess
function checkGuess() {
    // Get the user's guess
    let userGuess = parseInt(guessField.value);
    
    // Check if the guess is correct, too low, or too high
    if (userGuess === randomNumber) {
        message.innerHTML = `Congratulations! You guessed the correct number (${randomNumber})!`;
    } else if (userGuess < randomNumber) {
        message.innerHTML = "Too low. Try again.";
    } else if (userGuess > randomNumber) {
        message.innerHTML = "Too high. Try again.";
    }
}
