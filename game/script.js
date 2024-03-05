let diceNumber = Math.floor(Math.random() * 6) + 1;

function checkGuess() {
    rollDice();  // Roll the dice when the user submits a guess
    const guess = document.getElementById('guessField').value;
    const message = document.getElementById('message');

    if (guess == diceNumber) {
        message.textContent = 'Congratulations! You guessed right.';
    } else {
        message.textContent = 'Sorry, try again.';
    }
}

function rollDice() {
    diceNumber = Math.floor(Math.random() * 6) + 1;
    const diceResult = document.getElementById('diceResult');
    diceResult.textContent = 'Dice rolled: ' + diceNumber;
}