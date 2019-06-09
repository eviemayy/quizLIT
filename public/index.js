

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

//opens up the set modal
newSetButton.addEventListener('click', function(event){
    modalSetWindow.classList.toggle('hidden');
    modalSetWindow.value = 'Class Name';
});

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

var addCourse = document.getElementById('add-course');
addCourse.addEventListener('click', function(event) {
    console.log("Adding course");
});

///Trying to create a new card with handlebars

//insert a new Card
function insertNewCard(front, back){
  var cardTemplate = Handlebars.templates.card;
  var card1 = cardTemplate({
    term: front,
    definition: back
  });

  var container = document.getElementsByClassName('flash-card-container')[0];
  container.insertAdjacentHTML('beforeend', card1);
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

(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['card'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"flash-card\">\n    <p class=\"front term\"> "
    + alias4(((helper = (helper = helpers.term || (depth0 != null ? depth0.term : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"term","hash":{},"data":data}) : helper)))
    + "</p>\n    <p class=\"back definition\"> "
    + alias4(((helper = (helper = helpers.definition || (depth0 != null ? depth0.definition : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"definition","hash":{},"data":data}) : helper)))
    + " </p>\n</article>\n";
},"useData":true});
})();
