function getComputerChoice(){
    computerChoice = Math.random()*4;
    if (computerChoice <= 1){
        return 'Rock';
    }
    else if (computerChoice <= 2){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }
}

function getUserChoice(){
    let userChoice = prompt("Please enter your choice: 'rock', 'paper' or 'scissors': ");
    return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
}
function playRound(userChoice, computerChoice){
    if (userChoice == computerChoice){
        console.log("It's a tie!");
    }
    else if (userChoice == 'Rock' && computerChoice == 'Scissors' || userChoice == 'Paper' && computerChoice == 'Rock' || userChoice == 'Scissors' && computerChoice == 'Paper'){
        console.log(`You win! ${userChoice} beats ${computerChoice}`);
        userScore += 1;
    }
    else{
        console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        computerScore += 1;
    }
}
let userScore = 0;
let computerScore = 0;

function playGame(){
    console.log("Welcome to rock paper scissors game");
    do{
        const humanSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        console.log(`You choose ${humanSelection}`);
        console.log(`Computer choose ${computerSelection}`);
        playRound(humanSelection, computerSelection);
        console.log(`Your score is ${userScore}`);
        console.log(`Computer score is ${computerScore}`);
        var continueChoice = prompt("Wanna continue !! (Enter 'yes' to continue ,'no' to exit: ")
    } while (continueChoice == 'yes');
    console.log('Goodbye! Have a great day!');
}
playGame();