var Letter = require("./Letter");

var Word = function(word) {
    this.word = [];

    for(var i = 0; i < word.length; i++){
        var letter = new Letter(word.charAt(i));

        letter.checkInput(" ");

        this.word.push(letter);
    }

    this.toString = function(){
        var stringVal = "";

        this.word.forEach((element, index) => {
            stringVal += element.toString();

            if(index < this.word.length - 1)
                stringVal += " ";
        });

        return stringVal;
    }

    this.checkInput = function(letter) {
        var found = false;

        this.word.forEach(element => {
            element.checkInput(letter);
            if(element.isFound())
                found = true;
        });
        return found;
    }

    this.isComplete = function() {
        for(var i = 0; i < this.word.length; i++){
            if(!this.word[i].isFound())
                return false;
        }

        return true;
    }

}

module.exports = Word;