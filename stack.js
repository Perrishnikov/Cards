//=============================================================================
// Stack Object
//=============================================================================

//-----------------------------------------------------------------------------
// Stack constructor function.
//-----------------------------------------------------------------------------

function Stack() {

  // Create an empty array of cards.

  this.cards = new Array();

  this.makeDeck  = stackMakeDeck;
  this.shuffle   = stackShuffle;
  this.deal      = stackDeal;
  this.draw      = stackDraw;
  this.addCard   = stackAddCard;
  this.combine   = stackCombine;
  this.cardCount = stackCardCount;
}

//-----------------------------------------------------------------------------
// stackMakeDeck(n): Initializes a stack using 'n' packs of cards.
//-----------------------------------------------------------------------------

function stackMakeDeck(n) { //n from deck.js shuffle()

  var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
  var suits = new Array("C", "D", "H", "S");
  
  m = ranks.length * suits.length;

  // Set array of cards.

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.

  for (var i = 0; i < n; i++) //# of decks
    for (var j = 0; j < suits.length; j++) //# of suits
      for (var k = 0; k < ranks.length; k++) //# of ranks
        this.cards[i * m + j * ranks.length + k] = new Card(ranks[k], suits[j]);
  
  numCards = this.cards.length; // deck.js variable. Called in info.js

}

//-----------------------------------------------------------------------------
// stackShuffle(n): Shuffles a stack of cards 'n' times. 
//-----------------------------------------------------------------------------

function stackShuffle(n) {

  var temp;

  // Shuffle the stack 'n' times.

  for (var i = 0; i < n; i++)
    for (var j = 0; j < this.cards.length; j++) {
      var k = Math.floor(Math.random() * this.cards.length);
      temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
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

//-----------------------------------------------------------------------------
// stackCombine(stack): Adds the cards in the given stack to the current one.
// The given stack is emptied.
//-----------------------------------------------------------------------------

function stackCombine(stack) {

  this.cards = this.cards.concat(stack.cards);
  stack.cards = new Array();
}

//-----------------------------------------------------------------------------
// stackCardCount(): Returns the number of cards currently in the stack.
//-----------------------------------------------------------------------------
// used in deck.js display() "hand" and "discards"
function stackCardCount() {  
  
  numInDeck = this.cards.length; //deck.js global variable, info.js
  numInHand = this.cards.length;
  return this.cards.length;
}