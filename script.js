let playerScore = 0
let computerScore = 0
let roundWinner = ''


function getComputerChoice(){
    num = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    if(num == 0){
        return "ROCK";
    } else if( num == 1){
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection){
    

    console.log("P: " + playerSelection);
    console.log("C: " + computerSelection);

    if( playerSelection == computerSelection){
        //tie
        return "tie";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        //playerwin
        playerScore++
        return "player";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        //playerwin
        playerScore++
        return "player";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        //playerwin
        playerScore++
        return "player";
    } else {
        //computer win
        computerScore++
        return "computer";
    }
}

function gameOver(){
    return playerScore === 5 || computerScore === 5
}

const rockBtn = document.getElementById('rockbtn');
const paperBtn = document.getElementById('paperbtn');
const scissorsBtn = document.getElementById('scissorsbtn');

rockBtn.onclick(handleClick('ROCK'))

paperBtn.addEventListener('click', () => handleClick('PAPER'));
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'));


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
function game(){
    let roundCount = 0;
    while(roundCount < 5){
        const playerSelection = document.querySelector(".playerOption")
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        roundCount++;
    }
}
game();
function handleClick(playerSelection){
    console.log(playerSelection)
    console.log(":)")
}