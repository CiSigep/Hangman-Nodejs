var assert = require("assert");
var Letter = require("../Letter");

function testLetter() {
    // Test instantiation
    var letter = new Letter("a");

    assert(letter.letter === "a");

    // Test getLetter if found is false
    assert(letter.found === false && letter.getLetter() === "_");

    // Run checkInput with mismatch and check again
    letter.checkInput("b");
    assert(letter.found === false && letter.getLetter() === "_");

    // Run checkInput with match and check if character is revealed
    letter.checkInput("a");
    assert(letter.found === true && letter.getLetter() === "a");

    console.log("All tests done.");

}

testLetter();