var colour="red";
var canvas=document.getElementById("MyCanvas");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
    
}
function circle(mousex,mousey){
   colour=document.getElementById("colour").value;
   radius=document.getElementById("radius").value;
    ctx.beginPath();
    ctx.strokeStyle=colour;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,radius,0,2* Math.PI);
    ctx.stroke();   
}

    colour=document.getElementById("colour").value
    ctx.beginPath();
    ctx.strokestyle=colour;
    ctx.lineWidth=1;
    ctx.rect(150,143,430,200);
    ctx.stroke();

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}