console.log("hello");
let element = document.getElementById("btn1");
element.onclick=btn1Click;

let element2=document.body;
//element2.onload=btn1Click;

let element3=document.getElementById("txt");
element3.onchange=textChange;

let element4=document.getElementById("myDiv");
//element4.onmouseover=something;
//element4.onmouseout=notSomething;
element4.onmousedown=something;
element4.onmouseup=notSomething;

function btn1Click(){
    window.alert("Your are thicc");
}
function textChange(){
    window.alert("Your are not thicc");
}
function something(){
    element4.style.backgroundColor="lightgreen";
}
function notSomething(){
    element4.style.backgroundColor="aqua";
}