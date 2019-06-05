var modal = document.getElementById('create-flashcard-modal');
var createCardButton = document.getElementsByClassName('create-new-card')[0];
var closeModal = document.getElementsByClassName('modal-cancel-flashcard')[0];

createCardButton.addEventListener('click', function (event) {
  console.log("== button clicked");
  modal.style.display = "block";
});

closeModal.addEventListener('click', function (event) {
  modal.style.display = "none";
});
