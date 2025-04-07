//wait for the DOM to finish loading before running the game
// get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", function(){
 let buttons=document.getElementsByTagName("button");   
for(let button of buttons)
{button.addEventListener("click",function(){
    if(this.getAttribute("data-type")==="submit"){
        alert("You cliced submit!")
    }
    else{
        let gameType=this.getAttribute("data-type")
        runGame(gameType)
    }
})

}
runGame("addition");

})
/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
*/
function runGame(gameType)
{
    //create random numbers between 1 and 25
let num1=Math.floor(Math.random()*25+1); // +1 to prevent division by 0
let num2=Math.floor(Math.random()*25+1); 
if(gameType==="addition"){
  displayAdditionQuestion(num1,num2)  
}
else{
    alert("Unknown game type: "+gameType)
    throw `unknown game type: ${gameType}. Aborting`
}
}

function checkAnswer(){

}

function calculateCorrectAnswer()
{

}
function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2)
{document.getElementById("operand1").textContent=operand1;
 document.getElementById("operand2").textContent=operand2;
 document.getElementById("operator").textContent="+";


}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion()
{

}