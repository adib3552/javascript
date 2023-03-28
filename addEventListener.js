// .addEventListener(event, function, useCapture)
// you can add many event handler to one element
// even the same event that invokes different function
/*

let innerDiv = document.getElementById("innerDiv");
innerDiv.addEventListener("mouseover", changeClr);
innerDiv.addEventListener("mouseout", returnClr);

function changeClr(){
    innerDiv.style.backgroundColor="red";
}
function returnClr(){
    innerDiv.style.backgroundColor="aqua";
}
*/
let innerDiv = document.getElementById("innerDiv");
let outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeClr, true);
outerDiv.addEventListener("click", changeClr, true);

function changeClr(){
    alert("you pressed "+this.id);
    this.style.backgroundColor="red";
}