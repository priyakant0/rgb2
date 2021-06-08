// alert("welcome");
// var color=[
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(255, 0, 255)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 255, 255)",
// ]
var num=6;
var color=generaterandom(num);
var squares=document.querySelectorAll(".square");
var pickedcolor=rand();
var colordisplay=document.getElementById("colorDisplay");
colordisplay.textContent=pickedcolor;
var display=document.getElementById("display");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
reset.textContent="new color";

var easy=document.getElementById("easy");
var hard=document.getElementById("hard");

reset.addEventListener("click",function(){
    h1.style.backgroundColor="#00ffff"
    color=generaterandom(num);
     pickedcolor=rand();
     colordisplay=document.getElementById("colorDisplay");
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor  = color[i];}

});
easy.addEventListener("click",function(){
    num=3;
    color=generaterandom(num);
     pickedcolor=rand();
     colordisplay=document.getElementById("colorDisplay");
colordisplay.textContent=pickedcolor;
for(var i=0;i<color.length;i++){
    squares[i].style.backgroundColor  = color[i];}
    for(var i=3;i<squares.length;i++)
    squares[i].style.display="none";
});
hard.addEventListener("click",function(){
    num=6;
    color=generaterandom(num);
     pickedcolor=rand();
     colordisplay=document.getElementById("colorDisplay");
colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor  = color[i];}
 
});
// colordisplay.textContent=pickedcolor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor  = color[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.backgroundColor;
    //   console.log(pickedcolor,clickedcolor);
        if(clickedcolor===pickedcolor){
        // alert("correct");
           display.textContent=" YUP correct";
           reset.textContent="play again";
           changecolor(clickedcolor);
           h1.style.backgroundColor=clickedcolor;
        }
        else{
        display.textContent="wrong";
        this.style.backgroundColor="#00ffff";


        }
    });
}
    function changecolor(color){
        for(var i=0;i<squares.length;i++)
        squares[i].style.backgroundColor  = color;
        
    }
    function rand(){
        return color[Math.floor(Math.random()*color.length)];
    }
    function generaterandom(num){
        var arr=[]
        for(var i=0;i<num;i++){
           var p= random();
           var q= random();
           var r= random();
           arr.push("rgb("+p+", "+q+", "+r+")");
        }return arr;
    }
    function random(){
       return Math.floor(Math.random()*256);
    }

