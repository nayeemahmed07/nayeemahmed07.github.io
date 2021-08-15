// Naveigation
function openMenu() {
  document.getElementById('navbar').style.width = "100%"
}

function closeMenu() {
  document.getElementById('navbar').style.width = "0%"
}


// sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Img filer
var mixer = mixitup('.work__grid-containar');


// wow Animation
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();