var newCardButton = document.getElementsByClassName('create-new-card')[0];
var modalCardWindow = document.getElementById('create-flashcard-modal');
var modalTermInput = document.getElementsByClassName('term-input')[0];
var modalDefInput = document.getElementsByClassName('definition-input')[0];

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
