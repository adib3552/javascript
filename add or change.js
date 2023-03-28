console.log("hello world");

//add/change HTML elements
//.innerHTML(vulnerable to XSS attack)
//.textContent(more secure) 
/*
const elem= document.createElement("h1");
elem.innerHTML=window.prompt("Enter something: ");
document.body.append(elem);
*/
const elem = document.createElement("li");
elem.textContent="ola";
document.body.append(elem);