var Letter = function(letter){
    this.letter = letter;
    this.found = false;

    this.checkInput = function(input){
        if(input.toLowerCase() === this.letter.toLowerCase())
            this.found = true;
    }

    this.isFound = function() {
        return this.found;
    }

    this.toString = function() {
        return this.found ? this.letter : "_"; 
    }
}

module.exports = Letter;