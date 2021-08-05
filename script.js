/**
 *  ---------- Directory ----------
 * 1. Global Variables
 * 2. Header Functions
 * 3. Slideshow Functions 
 */


/* --- Global Variables --- */
const doc = document;
var burgerMenuClicked = false;
var burgerMenuLinkClicked = false;


/* --- Header Functions --- */
/* For mobile mode */
function onSelectBurgerMenuClick() {   
    if (burgerMenuClicked == false) {
        doc.getElementById("burger-menu").style.backgroundColor = "rgb(0, 186, 0)";
        doc.getElementById("burger-menu-list").style.display = "block";
        burgerMenuClicked = true;
    } else {
        doc.getElementById("burger-menu").style.backgroundColor = "rgb(0, 206, 0)";
        doc.getElementById("burger-menu-list").style.display = "none";
        burgerMenuClicked = false;
    }
}

function onBurgerMenuLinkClick(link, linkType) {
    if (burgerMenuLinkClicked == false) {
        link.style.backgroundColor = "rgb(255, 205, 0)";
        burgerMenuLinkClicked = true;
        window.open(linkType + '.html', "_self");    // Opens the respective HTML page
        setTimeout(() => {  // To timeout the colour change that is made after the div is clicked 
                link.style.backgroundColor = "rgb(244, 244, 244)";
        }, 1000);

    } else {
        link.style.backgroundColor = "rgb(244, 244, 244)";
        burgerMenuLinkClicked = false;
    }
}

/* For computer mode */
function onNavbarLinkClick(link, linkType) {
    if (burgerMenuLinkClicked == false) {
        burgerMenuLinkClicked = true;
        window.open(linkType + '.html', "_self");    // Opens the respective HTML page

    } else {
        burgerMenuLinkClicked = false;
    }
}


/* --- Slideshow Functions --- */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow-slides");
  var dots = document.getElementsByClassName("slideshow-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}