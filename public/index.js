
var modal = document.getElementById('create-flashcard-modal');
var createCardButton = document.getElementsByClassName('create-new-card')[0];
var closeModal = document.getElementsByClassName('modal-cancel-flashcard')[0];
var card = document.getElementsByClassName('flash-card')[0];

var front = document.getElementsByClassName("front")[0];
var back = document.getElementsByClassName("back")[0];

createCardButton.addEventListener('click', function (event) {
  console.log("== button clicked");
  modal.style.display = "block";
});

closeModal.addEventListener('click', function (event) {
  modal.style.display = "none";
});

card.addEventListener('click', function(event) {
  console.log("== card clicked");
  if(front.style.visibility != "hidden"){
    front.style.visibility = "hidden";
    back.style.visibility = "visible";
  }
  else{
    front.style.visibility = "visible";
    back.style.visibility = "hidden";
  }
});
