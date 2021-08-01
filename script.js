/**
 *  ---------- Directory ----------
 * 1. Global Variables
 * 2. Header Functions
 */


/* Global Variables */
const doc = document;
var burgerMenuClicked = false;

/* Header Functions */
// For mobile mode
function selectBurgerMenu() {   
    if (burgerMenuClicked == false) {
        doc.getElementById("burger-menu").style.backgroundColor = "rgb(0, 186, 0)";
        burgerMenuClicked = true;
    } else {
        doc.getElementById("burger-menu").style.backgroundColor = "rgb(0, 206, 0)";
        burgerMenuClicked = false;
    }
}