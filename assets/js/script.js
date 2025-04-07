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
        alert(`Yoy clicked ${gameType}`)
    }
})

}

})
/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
*/
function runGame()
{
    //create random numbers between 1 and 25
let num1=Math.floor(Math.random()*25+1); // +1 to prevent division by 0
let num2=Math.floor(Math.random()*25+1); 
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

function displayAdditionQuestion()
{

}

function displaySubtractQuestion(){

}

function displayMultiplyQuestion()
{

}