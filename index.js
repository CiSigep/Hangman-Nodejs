var colors = require("colors");
var inquirer = require("inquirer");
var Word = require("./Word");
var WordBank = require("./WordBank");

// Asks the player if they want to play again.
function playAgainPrompt(){
    inquirer.prompt([{
        type: "list",
        message: "Want to play again? ",
        choices: ["Yes", "No"],
        name: "again"
    }]).then(res => {
        if(res.again === "Yes"){
            // Reset the game.
            guesses = 10;
            correctWord = bank.random();
            word = new Word(correctWord);
            alreadyGuessed = [];
            console.log(word.toString());
            playGame();
        }
        
        return;
    });
}

// Function for playing the game.
function playGame() {
    inquirer.prompt([{
        message: "Guess a Letter: ",
        name: "guess",
        validate: input => {
            if(input.length !== 1 && input !== "quit") // Only allow inputs of length 1 or "quit"
                return "Input must be a single character long."
            else if(input.length === 1 && !/[a-z]/i.test(input)) // Inputs of length 1 must be a character.
                return "Input must be letter.";
            else if(input.length === 1 && alreadyGuessed.indexOf(input.toLowerCase()) >= 0) // Inputs must not have already been used.
                return "You have already used this character.";
            
            return true;
        }
    }]).then(res => {
        if(res.guess === "quit") {
            return;
        }

        // Check our letter in the word and add it to used.
        var guessed = word.checkInput(res.guess);
        alreadyGuessed.push(res.guess.toLowerCase());

        
        if(guessed) { // Correct 
            console.log("Correct!".green);
            console.log(word.toString());
            if(word.isComplete()){
                console.log("You Win!");
                playAgainPrompt();
            }
            else
                playGame();
        }
        else { // Incorrect
            guesses--;
            console.log("Incorrect!".red);
            console.log("Guesses Left: " + guesses);
            console.log(word.toString());
            if(guesses > 0) {
                playGame();
            }
            else {
                console.log("You Lose!");
                console.log("Your word was " + correctWord);
                playAgainPrompt();
            }
        }

    })

}

// Initialize game.
var bank = new WordBank();

var correctWord = bank.random();

var word = new Word(correctWord);
var alreadyGuessed = [];
var guesses = 10;

console.log(word.toString());
playGame();