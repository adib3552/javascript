//window prompt

//let username=window.prompt("what is your name?");
//console.log("hello "+ username);

//html textbox
let string,btn,result;
document.getElementById("thiccButton").onclick=function(){
    string=document.getElementById("thiccText").value;
    console.log(string);
    //document.getElementById("thiccButton").innerHTML=string;
    //btn=document.getElementById("thiccButton").value;
    /*if(btn!="submit"){
        document.getElementById("thiccButton").innerHTML="submit";
    }*/
    document.getElementById("result").innerHTML="hello "+string;
}
