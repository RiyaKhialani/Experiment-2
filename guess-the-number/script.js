const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

alert("Welcome to the Guess The Number game!\nTry to guess a number between 1 and 100.");

while (true) {
  guess = prompt("Enter your guess (or type 'exit' to quit):");

  if (guess === null || guess.toLowerCase() === "exit") {
    alert("Thanks for playing! The number was " + randomNumber);
    break;
  }

  guess = parseInt(guess, 10);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100!");
  } else if (guess < randomNumber) {
    alert("Too low! Try again.");
  } else if (guess > randomNumber) {
    alert("Too high! Try again.");
  } else {
    alert(`Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts!`);
    break;
  }
}
