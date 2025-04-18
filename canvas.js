
//divs

let canvas = document.getElementById("canvas");
let foo = document.getElementById("main");

//------------------------------------------------------------------------------------------------

//btns

//New Button

const newBtn = document.createElement("button");
newBtn.id = "newBtn";
newBtn.textContent = "NEW";

// Draw Button

const drawBtn = document.createElement("button");
drawBtn.id = "drawBtn";
drawBtn.textContent = "DRAW";

// Keyboard Button

const keyboardBtn = document.createElement("button");
keyboardBtn.id = "keyboardBtn";
keyboardBtn.textContent = "KEYBOARD";



//------------------------------------------------------------------------------------------------




//funcs

/* fn name: loadedPage()
 * This function creates buttons 
  that will be needed for practical stuff on the page
 */

function 
    loadedPage() 
 
  {
    canvas.appendChild(newBtn);
    canvas.appendChild(drawBtn);
    canvas.appendChild(keyboardBtn);
  }


//--------------------------------------------------------------------------------------------------

window.onload = loadedPage;