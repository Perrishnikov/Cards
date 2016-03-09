
"use strict";
    
function init(){
    document.getElementById("messageAreaL0").innerHTML = "Main info: " + view.defaultGreeting;
    document.getElementById("numCards").value = view.defaultNumCards;
    document.getElementById("stackName").value = view.defaultStackName;
    
    //event handlers
    var submitButton = document.getElementById("submit");
    submitButton.onclick = controller.handleSubmitButton;

    var resetButton = document.getElementById("reset");
    resetButton.onclick = controller.handleResetButton;
}

var view = {
    defaultGreeting : "Hello",
    defaultStackName : "My Stack",
    defaultNumCards : 13,

    //main info line
    displayMessageL0 : function(msg){
        var messageArea = document.getElementById("messageAreaL0");
        messageArea.innerHTML = "Main info: " + msg;
    },

    //card number info line
    displayMessageL1 : function(msg){
        var messageArea = document.getElementById("messageAreaL1");
        messageArea.innerHTML = "Name info: " + msg;
    },
    //stack name info line
    displayMessageL2 : function(msg){
        var messageArea = document.getElementById("messageAreaL2");
        messageArea.innerHTML = "Card info: " + msg;
    }    
};

var model = {
    stack01 : [], //concvet to stacks Object and insert 01,02, etc 
    ///////
    // numCards : null,
    stack : null,
    tags : {
        rank : null,
        suit : null
    }
};

var controller = {

    handleSubmitButton : function() {
        var cards = document.getElementById("numCards");
        var stack = document.getElementById("stackName");
        var tempNumCard = cards.value;
        var stackName = stack.value;

        function checkNumber (){
            if(!isNaN(tempNumCard) && tempNumCard > 0 && tempNumCard < 52) {
                model.numCards = tempNumCard;
                view.displayMessageL2(tempNumCard);
                view.displayMessageL1(stackName);
                controller.setStackNum(tempNumCard); //calling setStackNum

            } else {     
                console.log("enter a number greater than 0, go back to start");
                view.displayMessageL0("Try again. Enter a number greater than 0");
            }
        }
        checkNumber();          
    },

    handleResetButton : function (){
        //****** delete stack01, 
        console.log("Before Length: " + model.stack01.length);
        model.stack01.length = 0;
        console.log("After Length: " + model.stack01.length);        
        model.numCards = 0;

        console.log ("model numCards = " + model.numCards);
        console.log ("model stackName = " + model.stackName);

        view.displayMessageL0(view.defaultGreeting);
        view.displayMessageL1("");
        view.displayMessageL2("");
    },

    //-----------
    // 01.makeStack = new Stack();
    // then run setStackNum()
    // then display()
    // ----------

    //INSERT CARD NUMBERS INTO ARRAY
    setStackNum: function() {
        for (var i = 0; i < model.numCards; i++) {
            model.stack01.push([i + 1]);

        }
        console.log(model.stack01.toString());
        
        
        //
    }
    
};


window.onload = init;


function deal() {
    for (var i = 0; i < cards; i++){
        deck.addCard(deck.deal()); 
    }

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
    display();
}

function display() {

    var el, top, left;
    var n;

    // Note: only a fraction of the cards in the deck and discard pile are
    // displayed, just enough to get an idea of the number of cards in each.

    //hand
    left = 0;
    top  = 0;
    el = document.getElementById("deck");
    while (el.firstChild != null)
      el.removeChild(el.firstChild);
    for (var i = 0; i < cards; i++) {
      node = deck.cards[i].createNode();
      node.style.left = left + "em";
      node.style.top  = top  + "em";
      el.appendChild(node);
      left += 1.00;
      top  += 0.25;
    }
   
}
