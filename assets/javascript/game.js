var charName = ["retsuko", "haida", "fenneko", "gori", "washimi", "ton", "tsunoda", "kabae", "resasuke", "tsubone"];
var word = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var remainingGuesses = 15;
var losses = 0; 
var wins = 0;

function startGame() {
    word = charName[Math.floor(Math.random() * charName.length)];
    letters = word.split("");
    num = letters.length;

    console.log(num);
    console.log(letters);
    console.log(word);

    remainingGuesses = 15;
    wrongLetters = [];
    output = [];

    for(var i = 0; i < num; i++) {
        output.push("_");
        console.log(output);
    }

    document.getElementById("secretAnswer").innerHTML = output.join(" ");
    document.getElementById("game").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
};

function checkAnswer(letter) {
    var letterInWord = false;

    for(var j = 0; j < num; j++) {

        if(letter == word[j]) {
            letterInWord = true;
        }
    }

    if(letterInWord) {
        for(var j = 0; j < num; j++) {
            if(word[j] == letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    } else {
        wrongLetters.push(letter);
        remainingGuesses--;
    }
};

startGame();

function newRound() {
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("answersGuessed").innerHTML = wrongLetters;
    document.getElementById("secretAnswer").innerHTML = output.join(" ");

    if(letters.toString() == output.toString()) {
        wins++;
        document.getElementById("game").innerHTML = wins;
        startGame();
    } else if(remainingGuesses === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        startGame();
    }
};

document.onkeypress = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    checkAnswer(userGuess);
    newRound();
};