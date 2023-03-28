console.log("hello");

let element = document.querySelector("#names");
let child = element.nextElementSibling;
let childOfChild=element.firstElementChild;
child.style.backgroundColor="lightgreen";
childOfChild.style.backgroundColor="red";

let lastChild=child.nextElementSibling;
lastChild.style.backgroundColor="lightblue";