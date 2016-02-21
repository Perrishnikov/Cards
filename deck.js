// Deck functions on HTML

      var deck, hand, discards;
      var numDecks = 1; //updated in deck.js reset()
      var numCards; //set in cards.js stackMakeDeck()
      var numInDeck;
      var numInDiscard = 0;
      var numInHand = 0;

      window.onload = init;
      
      function init() {

        deck     = new Stack();
        hand     = new Stack();
        discards = new Stack();
        
        deck.makeDeck(numDecks); //set initial # of decks
        
        displayNumCards(); //info.js
        
        displayNumInDiscard(); //info.js
        numInHand = 0;
        
        displayNumInHand();

        display();
      }

      function shuffle() {
        if (deck == null) return;
        deck.shuffle(3); //increase for better shuffling?
        console.log("Deck shuffled");
        display();
      }

      function deal() {
        var e = document.getElementById("dealNum");
        var numDealt = e.value; //updates 

        if (deck == null) return;

        if (deck.cardCount() < numDealt) //run cardCount
          alert("Not enough cards.");
        else {
          discard();
          for (var i = 0; i < numDealt; i++)
            hand.addCard(deck.deal()); //run addCard, deal from deck

          numInHand = numDealt;// custom code
          displayNumInHand();// custom code

        }
        
        // displayNumInHand();

        display();
      }

      function discard() {

        if (deck == null) return;

        discards.combine(hand);
        display();
      }

      function reset() {

        if (deck == null) return;
        //New code to rerun init() with # of decks
        var e = document.getElementById("deckNum");
        numDecks = e.value
        
        init();
        //Old code to combine other stacks
        // discards.combine(hand);
        // deck.combine(discards);
        // display();
      }

      function display() {

        var el, top, left;
        var n;

        // Note: only a fraction of the cards in the deck and discard pile are
        // displayed, just enough to get an idea of the number of cards in each.
        displayNumInDiscard(); //stack.js stackCardCount()

        // deck
        left = 0;
        top  = 0;
        el = document.getElementById("deck");
        while (el.firstChild != null)
          el.removeChild(el.firstChild);
        n = deck.cardCount();
        for (var i = 0; i < Math.round(n / 5); i++) {
          node = deck.cards[i].createNode();
          node.firstChild.style.visibility = "hidden";
          node.style.left = left + "em";
          node.style.top  = top  + "em";
          el.appendChild(node);
          left += 0.10;
          top  += 0.05;

          displayNumInDeck(); //info.js

        }

        //hand
        left = 0;
        top  = 0;
        el = document.getElementById("hand");
        while (el.firstChild != null)
          el.removeChild(el.firstChild);
        for (var i = 0; i < hand.cardCount(); i++) {
          node = hand.cards[i].createNode();
          node.style.left = left + "em";
          node.style.top  = top  + "em";
          el.appendChild(node);
          left += 1.00;
          top  += 0.25;
        }

        //discards
        left = 0;
        top  = 0;
        el = document.getElementById("discards");
        while (el.firstChild != null)
          el.removeChild(el.firstChild);
        n = discards.cardCount();
        for (var i = n - Math.round(n / 5); i < n; i++) {
          node = discards.cards[i].createNode();
          node.style.left = left + "em";
          node.style.top  = top  + "em";
          el.appendChild(node);
          left += 0.10;
          top  += 0.05;
        }
      }