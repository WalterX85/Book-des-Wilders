// Get the modal
const modals = document.querySelectorAll(".modal");
const navModals1 = document.querySelectorAll(".navModal1");
const navModals2 = document.querySelectorAll(".navModal2");
const navModals3 = document.querySelectorAll(".navModal3");

// Get the button that opens the modal
const buttons = document.querySelectorAll(".card-button");
const navButtons1 = document.querySelectorAll(".buttonOnMenu1");
const navButtons2 = document.querySelectorAll(".buttonOnMenu2");
const navButtons3 = document.querySelectorAll(".buttonOnMenu3");

for(let i=0; i<buttons.length; i++) {
  buttons[i].onclick = function() {
    modals[i].style.display = "block";
  }
};
for(let i=0; i<navButtons1.length; i++) {
  navButtons1[i].onclick = function() {
    navModals1[i].style.display = "block";
  }
};
for(let i=0; i<navButtons2.length; i++) {
  navButtons2[i].onclick = function() {
    navModals2[i].style.display = "block";
  }
};
for(let i=0; i<navButtons3.length; i++) {
  navButtons3[i].onclick = function() {
    navModals3[i].style.display = "block";
  }
};

// Get the button that close the modal
const close = document.querySelectorAll(".close");
const navClose1 = document.querySelectorAll(".navClose1");
const navClose2 = document.querySelectorAll(".navClose2");
const navClose3 = document.querySelectorAll(".navClose3");

for(let i=0; i<close.length; i++) {
  close[i].onclick = function() {
    modals[i].style.display = "none";
  }
};
for(let i=0; i<navClose1.length; i++) {
  navClose1[i].onclick = function() {
    navModals1[i].style.display = "none";
  }
};
for(let i=0; i<navClose2.length; i++) {
  navClose2[i].onclick = function() {
    navModals2[i].style.display = "none";
  }
};
for(let i=0; i<navClose3.length; i++) {
  navClose3[i].onclick = function() {
    navModals3[i].style.display = "none";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
window.onclick = function(event) {
  if (event.target.classList.contains("navModal1")) {
    event.target.style.display = "none";
  }
};
window.onclick = function(event) {
  if (event.target.classList.contains("navModal2")) {
    event.target.style.display = "none";
  }
};
window.onclick = function(event) {
  if (event.target.classList.contains("navModal3")) {
    event.target.style.display = "none";
  }
};