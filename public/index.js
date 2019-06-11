
var newCardButton = document.getElementsByClassName('create-new-card')[0];
var modalCardWindow = document.getElementById('create-flashcard-modal');
var modalTermInput = document.getElementsByClassName('term-input')[0];
var modalDefInput = document.getElementsByClassName('definition-input')[0];

var card = document.querySelector('.flash-card');
var front = document.querySelector('.front');
var back = document.querySelector('.back');

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


//insert a new Card
function insertNewCard(front, back) {
    var cardContext = {
      term : front,
      definition : back
    };

    var cardHTML = Handlebars.templates.card(cardContext);
    var cardContainer = document.querySelector('main.flash-card-container');
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
}
  

// //create new card
var createCardButton = document.getElementsByClassName('modal-create-flashcard')[0];
createCardButton.addEventListener('click', function(event){
  console.log("==create card button clicked");
  var front = document.getElementsByClassName('term-input')[0].value;
  var back = document.getElementsByClassName('definition-input')[0].value;
    
if (front && back) {   
    insertNewCard(front, back);
    modalCardWindow.classList.toggle('hidden');
  }
  else {
      alert("You must add text in both boxes!");
  }
});
