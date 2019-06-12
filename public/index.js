
var newCardButton = document.getElementsByClassName('create-new-card')[0];
var modalCardWindow = document.getElementById('create-flashcard-modal');
var modalTermInput = document.getElementsByClassName('term-input')[0];
var modalDefInput = document.getElementsByClassName('definition-input')[0];
var modalSetWindow = document.getElementById('create-new-set-modal');
var newSetButton = document.getElementsByClassName('newSet')[0];
var navigationList = document.getElementsByClassName('navlist')[0];
var current = 0;


var card = document.querySelector('.flash-card');
var cards = [] //array of cards?
var front = document.querySelector('.front').innerHTML;
var back = document.querySelector('.back').innerHTML;

//this funtion should return the set name from the url.
function getSetfromURL(){
  console.log("entered get set url");
  var path = window.location.pathname;
  var pathParts = path.split('/');
  return pathParts[1];
}

// var nextButton = document.getElementsByClassName('next-flash-card-button');
// nextButton.addEventListener('click', function(event) {
//   if(current==cards.length){
//     current = 0;
//   }
//   else{
//     current = current + 1;
//   }
//   var frontHTML = '<p class="front term">' + cards[current].term + '</p>';
//   var backHTML = '<p class="back definition">' + cards[current].term +  '</p>';
// });

//flip from front to back

if (card){
card.addEventListener('click', function(event) {
  console.log("==cards array:", cards[current]);
  console.log("==cards[current].term:", cards[current].term);
  console.log("==cards[current].Definition:", cards[current].definition);
  var term = cards[current].term;
  var def = cards[current].definition;
  if (front.style.visibility != "hidden"){
      front.style.visibility = "hidden";
      back.style.visibility = "visible";
    }
    else{
      front.style.visibility = "visible";
      back.style.visibility = "hidden";
    }
  });
}

var cancelSetButton = document.getElementsByClassName('modal-cancel-set')[0];
var createSetButton = document.getElementsByClassName('modal-create-set')[0];

if (newSetButton){
  newSetButton.addEventListener('click', function(event){
    console.log("new set button clicked");
    modalSetWindow.classList.toggle('hidden');
    document.getElementsByClassName('class-name-input')[0].value = "Class Name";
  });
}

if (cancelSetButton){
  cancelSetButton.addEventListener('click', function(event){
    modalSetWindow.classList.toggle('hidden');
  });
}

createSetButton.addEventListener('click', function(event){
  console.log("==create set button clicked");
  var setName = document.getElementsByClassName('class-name-input')[0].value;
  if (setName == "Class Name") {
    alert("You must create a set name!");
  }
  else if(setName) {
    insertNewSet(setName);
    modalSetWindow.classList.toggle('hidden');
  }
  else {
      alert("You must create a set name!");
  }
});

function insertNewSet(setName){
  var setHTML = '<li class="navitem"><a href="' + setName + '">' + setName + '</a></li>';
  console.log("==html:", setHTML);
  navigationList.insertAdjacentHTML('afterbegin', setHTML);
}

//counter variables for clicking on the input boxes
var counter1 = 1;
var counter2 = 1;

//opens up the term modal
if (newCardButton){
  newCardButton.addEventListener('click', function(event){
    document.getElementsByClassName('term-input')[0].value = "Term";
    document.getElementsByClassName('definition-input')[0].value = "Definition";
      modalCardWindow.classList.toggle('hidden');
      counter1 = 1;
      counter2 = 1;
  });
}

//closes the modal and reenters term and definition 'prompt'
var cancelCardButton = document.getElementsByClassName('modal-cancel-flashcard')[0];
if (cancelCardButton){
  cancelCardButton.addEventListener('click', function(event){
      document.getElementsByClassName('term-input')[0].value = " ";
      document.getElementsByClassName('definition-input')[0].value = " ";
      modalCardWindow.classList.toggle('hidden');
      // modalTermInput.value = 'Term';
      // modalDefInput.value = 'Definition';
      counter1 = 1;
      counter2 = 1;
  });
}

//clears the input boxes of prompts when user clicks on the box
if (modalTermInput){
  modalTermInput.addEventListener('click', function(event){
    if(counter1 == 1){
        modalTermInput.value = '';
        counter1 = 0;
    }
  });
}

if (modalDefInput){
  modalDefInput.addEventListener('click', function(event){
      if(counter2 == 1){
          modalDefInput.value = '';
          counter2 = 0;
      }
  });
}

var newSetButton = document.getElementsByClassName('create-new-set')[0];
var modalSetWindow = document.getElementById('create-new-set-modal');
var modalClassNameInput = document.getElementsByClassName('class-name-input')[0];
var cancelSetButton = document.getElementsByClassName('modal-cancel-set');
var counter3 = 1;





//clears the input boxes of prompts when user clicks on the box
modalClassNameInput.addEventListener('click', function(event){
    if(counter3 == 1){
        modalClassNameInput.value = '';
        counter3 = 0;
    }
});


//insert a new Card
function insertNewCard(front, back) {
    var cardContext = {
      term : front,
      definition : back
    };

    cards.push(cardContext);
    var cardHTML = Handlebars.templates.card(cardContext);
    var cardContainer = document.querySelector('main.flash-card-container');
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
}


// //create new card
var createCardButton = document.getElementsByClassName('modal-create-flashcard')[0];
if (createCardButton){
  createCardButton.addEventListener('click', function(event){
    console.log("==create card button clicked");
    var front = document.getElementsByClassName('term-input')[0].value;
    var back = document.getElementsByClassName('definition-input')[0].value;

  if (front=="Term" || back == "Value") {
    alert("You must add text in both boxes!");
  }
  else if(front && back) {
      insertNewCard(front, back);
      modalCardWindow.classList.toggle('hidden');
    }
    else {
        alert("You must add text in both boxes!");
    }
  });
}
