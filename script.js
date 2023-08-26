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
        document.body.style.backgroundColor = 'grey';
        return "tie";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        //playerwin
        playerScore++
        document.body.style.backgroundColor = 'green';
        return "player";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        //playerwin
        playerScore++
        document.body.style.backgroundColor = 'green';
        return "player";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        //playerwin
        playerScore++
        document.body.style.backgroundColor = 'green';
        return "player";
    } else {
        //computer win
        computerScore++
        document.body.style.backgroundColor = 'red';
        return "computer";
    }
}

function gameOver(){
    return playerScore === 5 || computerScore === 5
}
function restartGame(){
    if( playerScore === 5){
        alert("Game Over. You Won!")
    } else {
        alert("Game Over. You Lose!")
    }
    document.body.style.backgroundColor = 'lightgrey';
    playerScore = 0
    computerScore = 0
    p_score.textContent = `${playerScore}`
    c_score.textContent = `${computerScore}`
}

const p_score = document.getElementById('playerScore')
const c_score = document.getElementById('computerScore')


function handleClick(playerSelection){
    
    if(gameOver()){
        restartGame()
        return
    }

    console.log(playerSelection)
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore)
    console.log(computerScore)
    p_score.textContent = `${playerScore}`
    c_score.textContent = `${computerScore}`
    
    if(gameOver()){
        restartGame()
        return
    }
}