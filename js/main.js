var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];

var checkForMatch = function () {

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match !");
		} else {
			alert("Sorry, try again.");
		};
	} else {
		// do nothing
	};
};

var flipCard = function (cardId) {

	console.log("User flipped over a " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);

	checkForMatch();

};

flipCard(0);
flipCard(2);

/*
	var cardOne = cards[0];
	var cardTwo = cards[2];
	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);

console.log("User flipped queen");
console.log("User flipped king");

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You have found a match")
	} else {
		alert("Sorry, try again")
	}
} else {
	// take this path
};
*/


