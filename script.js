/**
 *  ---------- Directory ----------
 * 1. Global Variables
 * 2. Header Functions
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

function onBurgerMenuLinkClick(link) {
    if (burgerMenuLinkClicked == false) {
        link.style.backgroundColor = "rgb(255, 205, 0)";
        burgerMenuLinkClicked = true;
    } else {
        link.style.backgroundColor = "rgb(244, 244, 244)";
        burgerMenuLinkClicked = false;
    }
}