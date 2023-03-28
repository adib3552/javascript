console.log("hello");
//by id
let element = document.getElementById("title");

element.style.backgroundColor="red";
//by name
let names = document.getElementsByName("name");

console.log(names[1]);

names.forEach(element => {
    if(element.checked){
        console.log(element.value)
    }
});
//by tag
let thiccNames = document.getElementsByTagName("li");
thiccNames[0].style.backgroundColor="blue";
//by class
let nicknames = document.getElementsByClassName("nickname");
nicknames[0].style.backgroundColor="green";
//by id(querySelector)
let a = document.querySelector("#title");
a.style.backgroundColor="lightgrey";
//by class(querySelector)
let b = document.querySelector(".nickname");
b.style.backgroundColor="lightblue";
//by tag(querySelector)
let c = document.querySelector("li");
c.style.backgroundColor="lightblue";
//by tag(querySelector)
let d = document.querySelector("[for]");
d.style.backgroundColor="lightblue";
