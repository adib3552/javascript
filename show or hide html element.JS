console.log("hello");

let thiccBtn=document.getElementById("thiccBtn");
let thiccImage=document.getElementById("thiccImage");

thiccBtn.addEventListener("click",hideImage);
function hideImage(){
    //alert("you pressed the button");
    if(thiccImage.style.display=="none"){
        thiccImage.style.display="block";
    }
    else{
        thiccImage.style.display="none";
    }
}