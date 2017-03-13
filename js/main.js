var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [ ];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You have found a match")
	} else {
		alert("Sorry, try again")
	}
} else {
	// take this path
};
console.log("User flipped queen");
console.log("User flipped king");