var charName = ["placeholder", "retsuko", "aggretsuko", "haida", "fenneko", "gori", "washimi", "ton", "tsunoda", "kabae", "resasuke", "tsubone"];
var word = "";
var letters = [];
var output = [];
var wrongLetters = [];

var num = 0;
var remainingGuesses = 15;
var losses = 0; 
var wins = 0;

function startGame() {
    // creates a random selection of one of the elements in array charName and stores in variable word
    word = charName[Math.floor(Math.random() * charName.length) + 1];
    console.log(word);
    // splits the letters of the randomly selected element in word into individual letters
    letters = word.split("");
    console.log(letters);
    // stores the number of letters from variable letters from the random word in to the variable number
    num = letters.length;
    console.log(num);

    // sets the default values of the remaining guesses, wrong guesses, and variable output that stores the random
    // word as underscores each time the game starts
    remainingGuesses = 15;
    wrongLetters = [];
    output = [];

    // stores the letters from variable num into empty array output as underscores
    for(var i = 0; i < num; i++) {
        output.push("_");
        console.log(output);
    }

    // underscores are put in a string and displayed in html
    document.getElementById("secretAnswer").innerHTML = output.join(" ");
    // shows wins, losses and remaining guesses in html
    document.getElementById("game").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
};

function checkAnswer(letter) {
    // assumes that the initial value of the variable is false
    var letterInWord = false;
    // loop showing if the variable letterInWord matches a letter in the random word, the value changes to true
    for(var j = 0; j < num; j++) {

        if(letter == word[j]) {
            letterInWord = true;
        }
    }
    // if LetterInWord is true, replaces underscore with guessed letter
    if(letterInWord) {
        for(var j = 0; j < num; j++) {
            if(word[j] == letter) {
                output[j] = letter;
                console.log(output)
            }
        }
    // if LetterInWord remains false, stores wrong guess in empty array wrongLetters and
    // decreases remaining guesses by one    
    } else if (wrongLetters.includes(letter)){ 
        alert("You have already made this guess")
    } else {
        wrongLetters.push(letter);
        remainingGuesses--;
    } 
};

// calls function to start the game
startGame();

// stores values of wins and losses, shows win or lose images upon completion of word or guesses run out
function newRound() {
    document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    document.getElementById("wrongLetters").innerHTML = wrongLetters;
    document.getElementById("secretAnswer").innerHTML = output.join(" ");

    // converts pushed array in empty global variables letters and output to strings, then checks
    // to make sure the values area comparable; if the are a point is added to wins
    if(letters.toString() == output.toString()) {
        wins++;
        document.getElementById("game").innerHTML = wins;
        // calls function image to display, gameStart is called again within the function image
        image();
    } else if(remainingGuesses === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        // calls function losingImage to display, gameStart is called again within function losingImage
        losingImage();
    }
};

// sets the game to begin as soon as a keyboard key is pressed and released 
document.onkeyup = function(event) {
    // user guess is a keyboard key and keys pressed will be converted to lower case
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    // function checkAnswer called to check if the userGuess is true or false
    checkAnswer(userGuess);
    // calls function newRound to start a new round, records wins and losses, empties wrong guesses,
    // and resets remaining guesses
    newRound();
};

function image() {
    if(word == "retsuko") {
        var photo = "<img src='assets/images/retsuko.png' width='560' height='560' alt='haida'>";
        document.getElementById("picture").innerHTML = photo;
        alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");

  } else if(word == "aggretsuko") {
      var photo = "<img src='assets/images/aggretsuko.png' width='560' height='560' alt='haida'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
    
  } else if(word == "haida") {
      var photo = "<img src='assets/images/haida.jpg' width='560' height='560' alt='haida'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
    
  } else if(word == "fenneko") {
      var photo = "<img src='assets/images/fenneko.jpg' width='560' height='560' alt='fenneko'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
      
  } else if(word == "gori") {
      var photo = "<img src='assets/images/gori.jpg' width='560' height='560' alt='gori'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
      
  } else if(word == "washimi") {
      var photo = "<img src='assets/images/washimi.jpg' width='560' height='560' alt='washimi'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
      
  } else if(word == "ton") {
      var photo = "<img src='assets/images/ton.jpg' width='560' height='560' alt='ton'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
      
  } else if(word == "tsunoda") {
      var photo = "<img src='assets/images/tsunoda.jpg' width='560' height='315' alt='tsunoda'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!")
      
  } else if(word == "kabae") {
      var photo = "<img src='assets/images/kabae.jpg' width='560' height='315' alt='kabae'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
      
  } else if(word == "resasuke") {
      var photo = "<img src='assets/images/resasuke.jpg' width='560' height='560' alt='resasuke'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
      
  } else if(word == "tsubone") {
      var photo = "<img src='assets/images/tsubone.jpg' width='560' height='560' alt='tsubone'>";
      document.getElementById("picture").innerHTML = photo;
      alert("Correct! The characters name is " + word.charAt(0).toUpperCase() + word.slice(1) + "!");
  } 
};
  
function losingImage() {
    if(remainingGuesses === 0) {
      var photo = "<iframe width='560' height='315' src='https://www.youtube.com/embed/hSsSRK4FGD0?autoplay=1' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>";
      document.getElementById("picture").innerHTML = photo;
    } 
};

document.getElementById("resetButton").onclick=function(){
    document.getElementById("picture").className = "hidden";
    startGame();
};        