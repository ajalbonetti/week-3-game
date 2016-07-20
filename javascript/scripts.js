

// PYSCHIC GAME SCRIPT


// Game Variables

var guessesLeft = 10;
var wins = 0;
var losses = 0;
var lettersGuessed = [];
var userGuess;
var chars = [];
var letter = "";


// Create Random Letter and Start Game Over

createLetter();

function createLetter() {

var chars = [
               "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
               "p","q","r","s","t","u","v","w","x","y","z"
               ];

var randomLetter = Math.floor(Math.random() * chars.length);
letter = chars[randomLetter];
lettersGuessed = [];
guessesLeft = 9;


}

// Captures Key Clicks

document.onkeyup = function(event) {
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      // console.log(userGuess);


// Check to See if Guessed Letter matches Random Letter

	if (userGuess === letter) {
		wins++;
            createLetter();


	} else {
		guessesLeft--;
            lettersGuessed.push(userGuess);
	}

      if (guessesLeft === 0) {
            losses++;
            createLetter();

      }

// Display Game to Webpage

      document.getElementById("wins").innerHTML = wins
      document.getElementById("losses").innerHTML = losses;
      document.getElementById("guessesLeft").innerHTML = guessesLeft;
      document.getElementById("lettersGuessed").innerHTML = lettersGuessed;


}

