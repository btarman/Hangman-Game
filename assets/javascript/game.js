// SETUP
var words = [ 
	"RZA", 
	"GZA", 
	"Method Man", 
	"Ol Dirty Bastard", 
	"Ghostface Killah",
	"U God",
	"Raekwon",
	"Inspectah Deck",
	"Masta Killa",
	"Cappadonna"
];
var badGuessesLeft = 5;
var matches = 0;
var missedGuessContainer = document.getElementById("missed_guess_container"); 
var randomNumber = Math.floor((Math.random() * words.length));

var randomWord = words[randomNumber];
var lengthOfRandomWordWithoutSpaces = randomWord.split(" ").join("").length;
var wordContainer = document.getElementById("word_container");
missedGuessContainer.innerHTML = badGuessesLeft;
var resultText = document.getElementById("result_text");
var winText = "King of Shaolin!";
var loseText = "Wu Hang Man Ain't Nuthin to F' With!";

for (i = 0; i < randomWord.length; i++) {
	
	var letterContainer = document.createElement("div");
	letterContainer.id = i;
	if(randomWord[i] !== " ") {
		letterContainer.className = "letter_container";
	} else {
		letterContainer.className = "empty_letter_container";
	}
	wordContainer.appendChild(letterContainer);	

}





// Events
document.onkeyup = function(event) {
	// is user input a letter
	if (event.which <=90 && event.which >=65) {
		var missedGuess = true;
		// is letter in word
		for (i = 0; i < randomWord.length; i++) {
			if (randomWord[i].toLowerCase() === event.key) {
				missedGuess = false;
				var matchedLetterContainer = document.getElementById(i);
				matchedLetterContainer.innerHTML = randomWord[i];
				matches += 1;
				if (matches === lengthOfRandomWordWithoutSpaces) {
					var winSong = document.getElementById("myAudio");
					winSong.play();
					resultText.innerHTML = winText;
					
				}
			}
			
		}
		if(missedGuess) {
			badGuessesLeft -= 1;
			missedGuessContainer.innerHTML = badGuessesLeft;
			if (badGuessesLeft === 0) {
				var loseSound = document.getElementById("myAudio2");
				loseSound.play();
				resultText.innerHTML = loseText;
				
			}
			
		}

	}
}
 