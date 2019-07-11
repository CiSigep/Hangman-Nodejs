var assert = require("assert");
var WordBank = require("../WordBank");

function testWordBank() {
    var bank = new WordBank();

    // Test getting a string from the bank.
    var word = bank.random();

    assert(word.length > 0 && typeof word === "string");

    console.log("All tests done.");

}

testWordBank();