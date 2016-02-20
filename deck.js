
      var deck, hand, discards;
      
      window.onload = init;

      function init() {

        deck     = new Stack();
        hand     = new Stack();
        discards = new Stack();
        deck.makeDeck(1); //set initial # of decks
        display();
      }

      function shuffle() {
        if (deck == null) return;
        deck.shuffle(1);
        console.log("Deck shuffled");
        display();
      }

      function deal() {
        var i;
        var e = document.getElementById("dealNum");
        var numDealt= e.value;

        if (deck == null) return;

        if (deck.cardCount() < numDealt)
          alert("Not enough cards.");
        else {
          discard();
          for (i = 0; i < numDealt; i++)
            hand.addCard(deck.deal());
        }

        display();
      }

      function discard() {

        if (deck == null) return;

        discards.combine(hand);
        display();
      }

      function reset() {

        var el;

        if (deck == null) return;

        discards.combine(hand);
        deck.combine(discards);
        display();
      }

      function display() {

        var el, top, left;
        var n;

        // Note: only a fraction of the cards in the deck and discard pile are
        // displayed, just enough to get an idea of the number of cards in each.

        left = 0;
        top  = 0;
        el = document.getElementById("deck");
        while (el.firstChild != null)
          el.removeChild(el.firstChild);
        n = deck.cardCount();
        for (i = 0; i < Math.round(n / 5); i++) {
          node = deck.cards[i].createNode();
          node.firstChild.style.visibility = "hidden";
          node.style.left = left + "em";
          node.style.top  = top  + "em";
          el.appendChild(node);
          left += 0.10;
          top  += 0.05;
        }

        left = 0;
        top  = 0;
        el = document.getElementById("hand");
        while (el.firstChild != null)
          el.removeChild(el.firstChild);
        for (i = 0; i < hand.cardCount(); i++) {
          node = hand.cards[i].createNode();
          node.style.left = left + "em";
          node.style.top  = top  + "em";
          el.appendChild(node);
          left += 1.00;
          top  += 0.25;
        }

        left = 0;
        top  = 0;
        el = document.getElementById("discards");
        while (el.firstChild != null)
          el.removeChild(el.firstChild);
        n = discards.cardCount();
        for (i = n - Math.round(n / 5); i < n; i++) {
          node = discards.cards[i].createNode();
          node.style.left = left + "em";
          node.style.top  = top  + "em";
          el.appendChild(node);
          left += 0.10;
          top  += 0.05;
        }
      }