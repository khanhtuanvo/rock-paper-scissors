function getComputerChoice(){
    const choices = ['Rock','Paper','Scissors'];
    const computerChoice = Math.floor(Math.random()*3);
    return choices[computerChoice];
}

function getUserChoice(){
    let userChoice = prompt("Please enter your choice: 'rock', 'paper' or 'scissors': ");
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
}
function playRound(userChoice, computerChoice){
    let result = '';
    if (userChoice == computerChoice){
        result = "It's a tie!";
    }
    else if (userChoice == 'Rock' && computerChoice == 'Scissors' || userChoice == 'Paper' && computerChoice == 'Rock' || userChoice == 'Scissors' && computerChoice == 'Paper'){
        result = `You win! ${userChoice} beats ${computerChoice}`;
        userScore += 1;
        userScoreSpan.textContent = userScore;
    }
    else{
        result = `You lose! ${computerChoice} beats ${userChoice}`;
        computerScore += 1;
        computerScoreSpan.textContent = computerScore;
    }
    resultDiv.innerHTML = `
        <p>You choose ${userChoice}</p>
        <p>Computer choose ${computerChoice}</p>
        <p>${result}</p>
        `;
    if (userScore == 5){
        resultDiv.innerHTML = "You win the game";
    }
    else if (computerScore == 5){
        resultDiv.innerHTML = "Computer win the game";
    }
}
let userScore = 0;
let computerScore = 0;
const resultDiv = document.getElementById("result");
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");

document.getElementById('rock').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Rock', computerSelection);
});

document.getElementById('paper').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Paper', computerSelection);
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    playRound('Scissors', computerSelection);
});

// function playGame(){
//     console.log("Welcome to rock paper scissors game");
//     do{
//         const humanSelection = getUserChoice();
//         const computerSelection = getComputerChoice();
//         result = `You choose ${humanSelection}`;
//         console.log(`Computer choose ${computerSelection}`);
//         playRound(humanSelection, computerSelection);
//         result = `Your score is ${userScore}`;
//         console.log(`Computer score is ${computerScore}`);
//         var continueChoice = prompt("Wanna continue !! (Enter 'yes' to continue ,'no' to exit: ")
//     } while (continueChoice == 'yes');
//     console.log('Goodbye! Have a great day!');
// }
// playGame();

