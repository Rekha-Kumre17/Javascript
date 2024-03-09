// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + " from NIT";

// let divs=document.querySelectorAll(".box");
//  let idx=1;
// for( div of divs){
// div.innerText=`New unique value ${idx} `;
// idx++;}

// let btn = document.createElement("button");
// console.dir(btn);
// btn.innerText = "Click Me!";
// btn.style.color = "white";
// btn.style.backgroundColor = "red";
// document.querySelector("body").prepend(btn);

// let par=document.querySelector("p");
// par.classList.add("newclass");

let boxe = document.querySelectorAll(".boxes");
let reset_btn = document.querySelector("#reset");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [6, 7, 8],
    [3, 4, 5]]
    ;

boxe.forEach(
    (boxes) => {
        boxes.addEventListener("click", () => {
            console.log("box was clicked");
            if (turnO) {
                boxes.innerText = "O";
                turnO = false;
            }
            else {
                boxes.innerText = "X";
                turnO = true;
            }
            boxes.disabled=true;
        });
    }
);