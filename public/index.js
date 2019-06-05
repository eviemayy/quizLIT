var newCardButton = document.getElementsByClassName('create-new-card')[0];
var modalWindow = document.getElementById('create-flashcard-modal');
var modalTermInput = document.getElementsByClassName('term-input')[0];
var modalDefInput = document.getElementsByClassName('definition-input')[0];

//counter variables for clicking on the input boxes
var counter1 = 1;
var counter2 = 1;

//opens up the modal
newCardButton.addEventListener('click', function(event){
    modalWindow.classList.toggle('hidden');
});

//closes the modal and reenters term and definition 'prompt'
var cancelCardButton = document.getElementsByClassName('modal-cancel-flashcard')[0];
cancelCardButton.addEventListener('click', function(event){
    modalWindow.classList.toggle('hidden');
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
