var Letter = require("./Letter");

var Word = function(word) {
    this.word = [];

    // Create an array of Letters that this word will hold.
    for(var i = 0; i < word.length; i++){
        var letter = new Letter(word.charAt(i));

        letter.checkInput(" ");

        this.word.push(letter);
    }

    // Write the word out as a string.
    this.toString = function(){
        return this.word.join(" ");
    }

    // Check inputs from the game to see if they match in the array.
    this.checkInput = function(letter) {
        var found = false;

        this.word.forEach(element => {
            // Only compare against letters that have not been found already
            if(!element.isFound()){
                element.checkInput(letter);
                if(element.isFound())
                    found = true;
            }
        });
        
        return found;
    }

    // Verify if the word has been completely found.
    this.isComplete = function() {
        for(var i = 0; i < this.word.length; i++){
            if(!this.word[i].isFound())
                return false;
        }

        return true;
    }

}

module.exports = Word;