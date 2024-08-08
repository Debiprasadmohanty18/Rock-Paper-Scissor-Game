const btnEle = document.querySelectorAll("button");

const userScoreEle = document.getElementById("user-score");
const compScoreEle = document.getElementById("comp-score");

const resultEle = document.getElementById("result");

let userScore = 0;
let compScore = 0;

btnEle.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        // console.log("You Clicked On ",btn.id);
        // console.log("Computer Choice ",compChoice());
        const result = playRound(btn.id, compChoice());
        // console.log(result);
        resultEle.textContent = result;


    })
})

function compChoice(){
    const choices = ["rock", "paper", "scissor"]

    const randomChoice = Math.floor(Math.random()*choices.length)
    return choices[randomChoice];
}

function playRound(userSelection,compSelection) {
    if(userSelection == compSelection) {
        return "It's a Tie!"
    } 
    else if(
        (userSelection == "rock" && compSelection == "scissor")||
        (userSelection == "paper" && compSelection == "rock")||
        (userSelection == "scissor" && compSelection == "paper")) 
        {
            userScore++;
            userScoreEle.textContent = userScore;
            return `Yeah!,You Won! (${userSelection} beats ${compSelection})`
            // return `Yeah!,You Won!`
        }
    else {
        compScore++;
        compScoreEle.textContent = compScore;
            return `Oops!,You lose! (${compSelection} beats ${userSelection})`
            //return `Oops!,You lose!`
        }       
    

}