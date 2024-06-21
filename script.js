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

function playGame() {
    const buttons = document.querySelectorAll("button");
    let msg = document.querySelector('#msg');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const humanChoice = button.id;
            const computerChoice = getComputerChoice();

            if (humanScore === 5 || computerScore === 5) {
                if (humanScore > computerScore) {
                    console.log("Human wins!");
                } else {
                    console.log("Computer wins!");
                }
            } else {
                playRound(humanChoice, computerChoice);
                console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
            }  
        });
    });
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'scissors':
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                break;
                case 'paper':
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                break;
                default:
                    console.log("It's a tie!");
            }
        break;

        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                break;
                case 'scissors':
                    console.log("You lose! Scissors beats Paper.");
                    computerScore++;
                break;
                default:
                    console.log("It's a tie!");
            }
        break;

        case 'scissors':
            switch(computerChoice) {
                case 'paper':
                    console.log("You win! Scissors beats Paper.");
                    humanScore++;
                break;
                case 'rock':
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                break;
                default:
                    console.log("It's a tie!");
            }
        break;
        default:
            console.log("IDK what happened");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();