// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.querySelector(".card-button");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Get the modal
const wild = document.getElementById("wild");

// Get the button that opens the modal
const buttonOnMenu = document.querySelector(".buttonOnMenu");

// Get the <span> element that closes the modal
const fermer = document.getElementsByClassName("fermer")[0];

// When the user clicks the button, open the modal 
buttonOnMenu.onclick = function() {
  wild.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fermer.onclick = function() {
  wild.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == wild) {
    wild.style.display = "none";
  }
}
