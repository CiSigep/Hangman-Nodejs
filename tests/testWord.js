var assert = require("assert");
var Word = require("../Word");

function testWord(){
    // Test Initialization
    var word = new Word("aBbac");

    assert("_ _ _ _ _" === word.toString() && word.isComplete() === false);

    // Test incorrect input
    assert(word.checkInput("d") === false && "_ _ _ _ _" === word.toString() && word.isComplete() === false);

    // Test correct input
    assert(word.checkInput("b") === true && "_ B b _ _" === word.toString() && word.isComplete() === false);

    // Test completed input
    assert(word.checkInput("c") === true && word.checkInput("a") === true && "a B b a c" === word.toString() && word.isComplete() === true);

    // Test spaced words
    var spacedWord = new Word("A B");

    assert("_   _" === spacedWord.toString() && spacedWord.isComplete() === false);

    assert(spacedWord.checkInput("a") === true && spacedWord.checkInput("b") === true && "A   B" === spacedWord.toString() && spacedWord.isComplete() === true);

    console.log("All tests done.")
}

testWord();