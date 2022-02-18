



audios = [
    new Audio("sounds/crash.mp3"),
    new Audio("sounds/kick-bass.mp3"),
    new Audio("sounds/snare.mp3"),
    new Audio("sounds/tom1.mp3"),
    new Audio("sounds/tom-2.mp3"),
    new Audio("sounds/tom-3.mp3"),
    new Audio("sounds/tom-4.mp3")
]

var instruments = document.getElementsByClassName("instru");
console.log("Instruments: "+ instruments);
console.log(instruments[0]);


var crash = document.querySelector("#crash");
crash.addEventListener("click",function(){
    audios[0].play();
})

var kick = document.querySelector("#kick");
kick.addEventListener("click",function(){
    audios[1].play();
})

var snare = document.querySelector("#snare");
snare.addEventListener("click",function(){
    audios[2].play();
})

var tom1 = document.querySelector("#tom1");
tom1.addEventListener("click",function(){
    audios[3].play();
})

var tom2 = document.querySelector("#tom2");
tom2.addEventListener("click",function(){
    audios[4].play();
})

var tom3 = document.querySelector("#tom3");
tom3.addEventListener("click",function(){
    audios[5].play();
})

var tom4 = document.querySelector("#tom4");
tom4.addEventListener("click",function(){
    audios[6].play();
})



/*
crash.addEventListener('click' , function(){
    //new Audio('sounds/crash.mp3').play();
    audios[0].play();
})
*/
