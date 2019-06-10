

var newCardButton = document.getElementsByClassName('create-new-card')[0];
var modalCardWindow = document.getElementById('create-flashcard-modal');
var modalTermInput = document.getElementsByClassName('term-input')[0];
var modalDefInput = document.getElementsByClassName('definition-input')[0];

var card = document.getElementsByClassName('flash-card')[0];
var front = document.getElementsByClassName('front')[0];
var back = document.getElementsByClassName('back')[0];

//flip from front to back
card.addEventListener('click', function(event) {
  console.log("== card clicked");
  if (front.style.visibility != "hidden"){
      front.style.visibility = "hidden";
      back.style.visibility = "visible";
  }
  else{
      front.style.visibility = "visible";
      back.style.visibility = "hidden";
  }
});

//counter variables for clicking on the input boxes
var counter1 = 1;
var counter2 = 1;

//opens up the term modal
newCardButton.addEventListener('click', function(event){
    modalCardWindow.classList.toggle('hidden');
});

//closes the modal and reenters term and definition 'prompt'
var cancelCardButton = document.getElementsByClassName('modal-cancel-flashcard')[0];
cancelCardButton.addEventListener('click', function(event){
    modalCardWindow.classList.toggle('hidden');
    modalTermInput.value = 'Term';
    modalDefInput.value = 'Definition';
    counter1 = 1;
    counter2 = 1;
});


//clears the input boxes of prompts when user clicks on the box
modalTermInput.addEventListener('click', function(event){
    if(counter1 == 1){
        modalTermInput.value = '';
        counter1 = 0;
    }
});

modalDefInput.addEventListener('click', function(event){
    if(counter2 == 1){
        modalDefInput.value = '';
        counter2 = 0;
    }
});

var newSetButton = document.getElementsByClassName('create-new-set')[0];
var modalSetWindow = document.getElementById('create-new-set-modal');
var modalClassNameInput = document.getElementsByClassName('class-name-input')[0];
var cancelSetButton = document.getElementsByClassName('modal-cancel-set');
var counter3 = 1;


var cancelSetButton = document.getElementsByClassName('modal-cancel-set')[0];
cancelSetButton.addEventListener('click', function(event){
    modalSetWindow.classList.toggle('hidden');
    modalClassNameInput.value = 'ClassName';
    counter3 = 1;
});


//clears the input boxes of prompts when user clicks on the box
modalClassNameInput.addEventListener('click', function(event){
    if(counter3 == 1){
        modalClassNameInput.value = '';
        counter3 = 0;
    }
});

///Trying to create a new card with handlebars

function getSetNameFromURL() {
    var path = window.location.pathname;
    var pathParts = path.split('/');
    return pathParts[1];
}

//insert a new Card
function insertNewCard(term, definition){

  if (!term || !definition) {
    alert("You must put a term and corresponding definition!");
  } else {

    var request = new XMLHttpRequest();
    var url = "/" + getSetNameFromURL() + '/addCard';
    request.open('POST', url);

    var card1 = {
    term: term,
    definition: definition
    };
    var requestBody = JSON.stringify(card1);

    request.addEventListener('load', function (event) {
        if (event.target.status === 200) {
          var newCardTemplate = Handlebars.templates.card;
          var newCardHTML = newCardTemplate({
            term: term,
            definition: definition
          });
          var cardContainer = document.querySelector('.flash-card-container');
          cardContainer.insertAdjacentHTML('beforeend', newCardHTML);
        } else {
          var message = event.target.response;
          alert("Error storing card on server: " + message);
        }
      });
  
      request.setRequestHeader('Content-Type', 'application/json');
      request.send(requestBody);
  
      hideModal();
  }
//   var cardHTML = Handlebars.templates.card(card1);
//   var container = document.getElementsByClassName('flash-card-container')[0];
//   container.insertAdjacentHTML('beforeend', card1);
}

//create new card
var createCardButton = document.getElementsByClassName('modal-create-flashcard')[0];
createCardButton.addEventListener('click', function(event){
  console.log("==create card button clicked");
  var front = document.getElementsByClassName('term-input')[0].value;
  var back = document.getElementsByClassName('definition-input')[0].value;
  insertNewCard(front, back);
  modalCardWindow.classList.toggle('hidden');
});
