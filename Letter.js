var Letter = function(letter){
    this.letter = letter;
    this.found = false;

    this.checkInput = function(input){
        if(input === letter)
            this.found = true;
    }

    this.getLetter = function() {
        return this.found ? this.letter : "_"; 
    }
}

module.exports = Letter;