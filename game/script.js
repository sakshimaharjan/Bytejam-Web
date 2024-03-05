<<<<<<< HEAD
let randomNumber = Math.floor(Math.random() * 20) + 1;

let guessField = document.getElementById("guessField");
let message = document.getElementById("message");

function checkGuess() {
    let userGuess = parseInt(guessField.value);
    
=======

let randomNumber = Math.floor(Math.random() * 20) + 1;


let guessField = document.getElementById("guessField");
let message = document.getElementById("message");


function checkGuess() {
    
    let userGuess = parseInt(guessField.value);
    
    
>>>>>>> 374874e2c83bb5f360dcbcafbc6848e366b7cbc3
    if (userGuess === randomNumber) {
        message.innerHTML = `Congratulations! You guessed the correct number (${randomNumber})!`;
    } else if (userGuess < randomNumber) {
        message.innerHTML = "Too low. Try again.";
    } else if (userGuess > randomNumber) {
        message.innerHTML = "Too high. Try again.";
    }
}
