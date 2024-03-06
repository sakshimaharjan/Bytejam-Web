let diceNumber = Math.floor(Math.random() * 6) + 1;
let guessMade = false;

function checkGuess() {
    const guess = document.getElementById('guessField').value;
    const message = document.getElementById('message');

    if (guess) {
        guessMade = true;
        rollDice(); 

        if (guess == diceNumber) {
            message.textContent = 'Congratulations! You guessed right.';
        } else {
            message.textContent = 'Sorry, try again.';
        }
    } else {
        message.textContent = 'Please enter a guess first.';
    }
}

function rollDice() {
    const diceResult = document.getElementById('diceResult');

    if (!guessMade) {
        diceResult.textContent = 'Guess the number first.';
    } else {
        diceNumber = Math.floor(Math.random() * 6) + 1;
        diceResult.textContent = 'Dice rolled: ' + diceNumber;
    }
}