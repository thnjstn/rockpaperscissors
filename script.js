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
    const results = document.querySelector("div");
    const score = document.createElement("p");
    const choices = document.createElement("p");
    const finalResult = document.createElement("p");
    const round = document.createElement("p");
    round.id = "id";
    results.appendChild(choices);
    results.appendChild(round);
    results.appendChild(score);
    results.appendChild(finalResult);

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {

            const humanChoice = button.id;
            const computerChoice = getComputerChoice();

            if (humanScore === 5 || computerScore === 5) {
                return;
            } else {
                playRound(humanChoice, computerChoice);
                choices.textContent = `Human: ${humanChoice}, Computer: ${computerChoice}`;
                
                score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
                
            }

            if (humanScore === 5) {
                finalResult.textContent = "Human wins!";
                
            } else if (computerScore === 5) {
                finalResult.textContent = "Computer wins!";
            }
        });
    });
}

function playRound(humanChoice, computerChoice) {
    const round = document.getElementById("id");
    switch (humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'scissors':
                    round.textContent = "You win! Rock beats Scissors.";
                    humanScore++;
                break;
                case 'paper':
                    round.textContent = "You lose! Paper beats Rock.";
                    computerScore++;
                break;
                default:
                    round.textContent = "It's a tie!";
            }
        break;

        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    round.textContent = "You win! Paper beats Rock.";
                    humanScore++;
                break;
                case 'scissors':
                    round.textContent = "You lose! Scissors beats Paper.";
                    computerScore++;
                break;
                default:
                    round.textContent = "It's a tie!";
            }
        break;

        case 'scissors':
            switch(computerChoice) {
                case 'paper':
                    round.textContent = "You win! Scissors beats Paper.";
                    humanScore++;
                break;
                case 'rock':
                    round.textContent = "You lose! Rock beats Scissors.";
                    computerScore++;
                break;
                default:
                    round.textContent = "It's a tie!";
            }
        break;
        default:
            
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();