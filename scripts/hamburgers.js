// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var modal = document.getElementById('modalnav');

// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
  modalnav.classList.toggle("db");

  window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.toggle("db");
        hamburger.classList.toggle("is-active");
    }
  }

});
