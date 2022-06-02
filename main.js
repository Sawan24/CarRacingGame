var bluecar = document.getElementById("bluecar");
var maincar = document.getElementById("maincar");
var result = document.getElementById("result")
const score = document.getElementById("score")
var game = document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")

// bluecar move
bluecar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 5)) * 65)
    bluecar.style.left = random + "px";
    counter++
})

// maincar move
window.addEventListener("keydown", function(e){
   if(e.keyCode == "39"){ var maincarLeft = parseInt(window.getComputedStyle(maincar).getPropertyValue("left"))
    if(maincarLeft < 260) {maincar.style.left = (maincarLeft + 65) + "px"
    jumpsound.play()
    
}
   };
    
   if(e.keyCode == "37"){
    var maincarLeft = parseInt(window.getComputedStyle(maincar).getPropertyValue("left"))
   if(maincarLeft > 65) { maincar.style.left = (maincarLeft - 65) + "px"
   jumpsound.play()
   }

}
})

// Game Over

setInterval(function Gameover(){
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    
    var bluecarLet = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    
    var maincarLeft = parseInt(window.getComputedStyle(maincar).getPropertyValue("left"));
    if((bluecarLet === maincarLeft) && (bluecarTop > 250) && (bluecarTop < 450))
    {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter}`;
        
        counter=0;
    }
}, 10)