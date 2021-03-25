// Get the modal
const modals = document.querySelectorAll(".modal");

// Get the button that opens the modal
const buttons = document.querySelectorAll(".card-button");

for(let i=0; i<buttons.length; i++) {
  buttons[i].onclick = function() {
    modals[i].style.display = "block";
  }
}

// Get the button that close the modal
const close = document.querySelectorAll(".close");

for(let i=0; i<close.length; i++) {
  close[i].onclick = function() {
    modals[i].style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}