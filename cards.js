"use strict";
//-----------------------------------------------------------------------------
// Card constructor function.
//-----------------------------------------------------------------------------
// from stack.js stackMakeDeck()
function Card(rank, suit) {

  this.rank = rank;
  this.suit = suit;

  this.toString   = cardToString;
  this.createNode = cardCreateNode;
}

//-----------------------------------------------------------------------------
// cardToString(): Returns the name of a card (including rank and suit) as a
// text string.
//-----------------------------------------------------------------------------

function cardToString() {

  var rank, suit;

  switch (this.rank) {
    case "1" :
      rank = "Ace";
      break;
    case "2" :
      rank = "Two";
      break;
    case "3" :
      rank = "Three";
      break;
    case "4" :
      rank = "Four";
      break;
    case "5" :
      rank = "Five";
      break;
    case "6" :
      rank = "Six";
      break;
    case "7" :
      rank = "Seven";
      break;
    case "8" :
      rank = "Eight";
      break;
    case "9" :
      rank = "Nine";
      break;
    case "10" :
      rank = "Ten";
      break;
    case "11" :
      rank = "Jack"
      break;
    case "12" :
      rank = "Queen"
      break;
    case "13" :
      rank = "King"
      break;
    default :
      rank = null;
      break;
  }

  switch (this.suit) {
    case "C" :
      suit = "Clubs";
      break;
    case "D" :
      suit = "Diamonds"
      break;
    case "H" :
      suit = "Hearts"
      break;
    case "S" :
      suit = "Spades"
      break;
    default :
      suit = null;
      break;
  }

  if (rank == null || suit == null)
    return "";

  return rank + " of " + suit;
}

//-----------------------------------------------------------------------------
// cardCreateNode(): Returns a DIV node which can be used to display the card 
// on a page.
//-----------------------------------------------------------------------------

var cardImg0 = new Image(); cardImg0.src= "graphics/cardback.gif";
var cardImg1 = new Image(); cardImg1.src= "graphics/jack.gif";
var cardImg2 = new Image(); cardImg2.src= "graphics/queen.gif";
var cardImg3 = new Image(); cardImg3.src= "graphics/king.gif";

function cardCreateNode() {

  var cardNode; //will create element "DIV"
  var frontNode; 
  var indexNode; 
  var spotNode; 
  var tempNode; 
  var textNode;

    var nameNode;//////////////////////////////////////////////////  
  
  // This is the main node, a DIV tag.

  cardNode = document.createElement("DIV");
  cardNode.className = "card"; //create HTML class called "card"

  // Build the front of card.

  frontNode = document.createElement("DIV");
  frontNode.className = "front";

  // Get proper character for card suit and change font color if necessary.

  var spotChar = "\u00a0";
  switch (this.suit) {
    case "C" :
      spotChar = "\u2663";
      break;
    case "D" :
      frontNode.className += " red";
      spotChar = "\u2666";
      break;
    case "H" :
      frontNode.className += " red";
      spotChar = "\u2665";
      break;
    case "S" :
      spotChar = "\u2660";
      break;
  }

  //my node //use CSS to shape it
    nameStr = this.toString();
    if (this.toString() == "")

    nameStr = "";//"\u00a0"; //why is this here?
    
    nameNode = document.createElement("DIV");
    nameNode.className = "cardName";

    textNode = document.createTextNode(nameStr);
    nameNode.appendChild(textNode);
    nameNode.appendChild(document.createElement("BR"));

    frontNode.appendChild(nameNode);

  // Create and add the index (rank) to the upper-left corner of the card.

  var indexStr = this.rank; //yes
  if (this.toString() == "") //yes
  
  indexStr = "\u00a0";
  spotNode = document.createElement("DIV");
  spotNode.className = "index";

  textNode = document.createTextNode(indexStr);

  spotNode.appendChild(textNode);
  spotNode.appendChild(document.createElement("BR"));

  textNode = document.createTextNode(spotChar);
  spotNode.appendChild(textNode);

  frontNode.appendChild(spotNode);


  // Create and add spots based on card rank (Ace thru 10).

  spotNode = document.createElement("DIV");
  textNode = document.createTextNode(spotChar);
  spotNode.appendChild(textNode);
  if (this.rank == "A") {
    spotNode.className = "ace";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "3" || this.rank == "5" || this.rank == "9") {
    spotNode.className = "spot B3";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "2" || this.rank == "3") {
    spotNode.className = "spot B1";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "2" || this.rank == "3") {
    spotNode.className = "spot B5";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "4" || this.rank == "5" || this.rank == "6" ||
      this.rank == "7" || this.rank == "8" || this.rank == "9" ||
      this.rank == "10") {
    spotNode.className = "spot A1";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot A5";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot C1";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot C5";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "6" || this.rank == "7" || this.rank == "8") {
    spotNode.className = "spot A3";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot C3";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "7" || this.rank == "8" || this.rank == "10") {
    spotNode.className = "spot B2";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "8" || this.rank == "10") {
    spotNode.className = "spot B4";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }
  if (this.rank == "9" || this.rank == "10") {
    spotNode.className = "spot A2";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot A4";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot C2";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot C4";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }

  // For face cards (Jack, Queen or King), create and add the proper image.

  tempNode = document.createElement("IMG");
  tempNode.className = "face";
  if (this.rank == "J")
    tempNode.src = "graphics/jack.gif";
  if (this.rank == "Q")
    tempNode.src = "graphics/queen.gif";
  if (this.rank == "K")
    tempNode.src = "graphics/king.gif";

  // For face cards, add suit characters to the upper-left and lower-right
  // corners.

  if (this.rank == "J" || this.rank == "Q" || this.rank == "K") {
    frontNode.appendChild(tempNode);
    spotNode.className = "spot A1";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
    spotNode.className = "spot C5";
    tempNode = spotNode.cloneNode(true);
    frontNode.appendChild(tempNode);
  }

  // Add front node to the card node.

  cardNode.appendChild(frontNode);

  // Return the card node.

  return cardNode;
}