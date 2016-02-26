"use strict";
//=============================================================================
// Stack Object
//=============================================================================

//-----------------------------------------------------------------------------
// Stack constructor function.
//-----------------------------------------------------------------------------

function Stack() {

  // Create an empty array of cards.

  this.cards     = new Array();

  this.makeStack  = stackMakeStack; //from deck.js init(), to below
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  
}

//-----------------------------------------------------------------------------
// stackMakeStack(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

function stackMakeStack() { //n from deck.js unit deck.makeStack

    // var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");

    var ranks = model.deck01;
    var suits = new Array("C", "D", "H", "S");

    var m = ranks * suits.length;
    console.log("Total # of cards: " + m);

    // Set array of cards.

    this.cards = new Array(n * m);

    // Fill the array with 'n' packs of cards.
    var n = 1
    for (var i = 0; i < n; i++) //# of decks
      for (var j = 0; j < suits.length; j++) //# of suits
          for (var k = 0; k < n ; k++) //# of ranks
              this.cards[m + j * ranks.length + k] = new Card(ranks[k], suits[j]);

    console.log(this.cards.length);  
    // numCards = this.cards.length; // deck.js variable. Called in info.js

}


//-----------------------------------------------------------------------------
// stackDeal(): Removes the first card in the stack and returns it.
//-----------------------------------------------------------------------------

function stackDeal() {

  if (this.cards.length > 0)
    return this.cards.shift();
  else
    return null;
}

//-----------------------------------------------------------------------------
// stackDraw(n): Removes the indicated card from the stack and returns it.
//-----------------------------------------------------------------------------

function stackDraw(n) {

  var card;

  if (n >= 0 && n < this.cards.length) {
    card = this.cards[n];
    this.cards.splice(n, 1);
  }
  else
    card = null;

  return card;
}

//-----------------------------------------------------------------------------
// stackAdd(card): Adds the given card to the stack.
//-----------------------------------------------------------------------------

function stackAddCard(card) {

  this.cards.push(card);
}
