function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        computerChoice = "rock";
    } else if (computerChoice === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

function getHumanChoice() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            humanChoice = button.id;
            playGame(humanChoice);
        });
    });
    
}

function playGame(humanChoice) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            } else if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
            } else {
                console.log("It's a tie!");
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            } else {
                console.log("It's a tie!");
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
            } else if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            } else {
                console.log("It's a tie!");
            }
        } else {
            console.log("Invalid option! Point to computer.");
            computerScore++;
        }
    }

    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("The winner is human!");
    } else if (computerScore > humanScore) {
        console.log("The winner is computer!");
    } else {
        console.log("It's a tie!");
    }
}

getHumanChoice();