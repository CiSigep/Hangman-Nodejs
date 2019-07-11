var WordBank = function () {
    this.words = ["Mario", "Luigi", "Samus", "Nero", "Dante", "Ness", "Lucas", "Falco", "Fox", "Snake",
            "Link", "Yoshi", "Kirby", "Bowser", "Peach", "Daisy", "Wario", "Waluigi", "Sonic", "Shadow",
            "Shulk", "Ryu", "Ken", "Olimar", "Cloud", "Ridley", "Simon", "Richter", "Rosalina", "Zelda", "Shiek",
            "Wolf", "Bayonetta", "Roy", "Marth", "Pit", "Joker", "Chrom", "Ike", "Robin", "Corrin", "Palutena",
            "Isabelle", "Kratos", "Ganondorf", "GLaDOS", "Tails", "Knuckles", "Banjo", "Kazooie", "Sora",
            "Jak", "Daxter", "Ratchet", "Clank", "Spyro"],

    // Gives a random word when called.
    this.random =  function() {
        return this.words[Math.floor(Math.random() * this.words.length)];
    }
};

module.exports = WordBank;