var assert = require("assert");
var Letter = require("../Letter");

function testLetter() {
    // Test instantiation
    var letter = new Letter("a");

    assert(letter.letter === "a");

    // Test getLetter if found is false
    assert(letter.isFound() === false && letter.toString() === "_");

    // Run checkInput with mismatch and check again
    letter.checkInput("b");
    assert(letter.isFound() === false && letter.toString() === "_");
    
    // Run checkInput with match and check if character is revealed
    letter.checkInput("a");
    assert(letter.isFound() === true && letter.toString() === "a");

    // Test Case Insensitivity
    var letter2 = new Letter("B");
    letter2.checkInput("b");
    assert(letter2.isFound() === true && letter2.toString() === "B");

    var letter3 = new Letter("c");
    letter3.checkInput("C");
    assert(letter3.isFound() === true && letter3.toString() === "c");

    console.log("All tests done.");

}

testLetter();