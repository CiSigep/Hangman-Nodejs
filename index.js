var Word = require("./Word");
var colors = require("colors");
var inquirer = require("inquirer");

var WordBank = function () {
    this.words = ["Mario", "Luigi", "Samus", "Nero", "Dante", "Ness", "Lucas", "Falco", "Fox", "Snake",
            "Link", "Yoshi", "Kirby", "Bowser", "Peach", "Daisy", "Wario", "Waluigi", "Sonic", "Shadow",
            "Shulk", "Ryu", "Ken", "Olimar", "Cloud", "Ridley", "Simon", "Richter", "Rosalina", "Zelda", "Shiek",
            "Wolf", "Bayonetta", "Roy", "Marth", "Pit", "Joker", "Chrom", "Ike", "Robin", "Corrin", "Palutena",
            "Isabelle", "Kratos", "Ganondorf", "GLaDOS", "Tails", "Knuckles", "Banjo", "Kazooie", "Sora",
            "Jak", "Daxter", "Ratchet", "Clank", "Spyro"],

    // Gives a random word when  called
    this.random =  function() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
};

function playAgainPrompt(){
    inquirer.prompt([{
        type: "list",
        message: "Want to play again? ",
        choices: ["Yes", "No"],
        name: "again"
    }]).then(res => {
        if(res.again === "Yes"){
            guesses = 10;
            correctWord = bank.random();
            word = new Word(correctWord);
            alreadyGuessed = [];
            playGame();
        }
        
        return;
    });
}

function playGame() {
    inquirer.prompt([{
        message: "Guess a Letter: ",
        name: "guess",
        validate: input => {
            if(input.length !== 1 && input !== "quit")
                return "Input must be a single character long."
            else if(input.length === 1 && !/[a-z]/i.test(input))
                return "Input must be letter.";
            else if(input.length === 1 && alreadyGuessed.indexOf(input.toLowerCase()) >= 0)
                return "You have already used this character.";
            
            return true;
        }
    }]).then(res => {
        if(res.guess === "quit") {
            return;
        }

        var guessed = word.checkInput(res.guess);
        alreadyGuessed.push(res.guess.toLowerCase());

        if(guessed) {
            console.log("Correct!".green);
            console.log(word.toString());
            if(word.isComplete()){
                console.log("You Win!");
                playAgainPrompt();
            }
            else
                playGame();
        }
        else {
            guesses--;
            console.log("Incorrect!".red);
            console.log("Guesses Left: " + guesses)
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

var bank = new WordBank();

var correctWord = bank.random();

var word = new Word(correctWord);
var alreadyGuessed = [];
var guesses = 10;

playGame();