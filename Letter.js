var Letter = function(letter){
    this.letter = letter;
    this.found = false;

    // Compare the input against the letter contained here.
    this.checkInput = function(input){
        if(input.toLowerCase() === this.letter.toLowerCase())
            this.found = true;
    }

    // Get found.
    this.isFound = function() {
        return this.found;
    }

    // Output the letter as "_" or the letter istelf if it is found.
    this.toString = function() {
        return this.found ? this.letter : "_"; 
    }
}

module.exports = Letter;