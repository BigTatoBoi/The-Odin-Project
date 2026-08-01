let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
   const rand = Math.floor(Math.random() * 3)
   if (rand === 0) {
    return "rock"
   } else if (rand === 1) {
    return "paper"
   } else {
    return "scissors"
   }
    
}

function getHumanChoice() {
    const choice = prompt("Enter rock, paper, or scissors: ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
   if (humanChoice === computerChoice) {
    console.log("It's a tie");
   } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
   ) {
    console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice,computerChoice);
        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("CONGRATS YOU WON THE GAME!");
    } else if (humanScore === computerScore) {
        console.log("ITS A TIE!!!!!");
    } else {
        console.log("HAHA LOSER! YOU LOST")
    }

}

playGame()