// randon integer chooses from array
function computerplay() {
    const rps = ['rock', 'paper', 'scissors'];
    const rand = getRandomInt();
    return rps[rand]
}

// max and min of random integer clue: mathfloor
function getRandomInt() {
    return Math.floor(Math.random() * 3);
}
console.log(getRandomInt())


// compares r,p,s and determines 1 or 0 for win or lose
// 0 = computer win
// 1 = player win
// -1 = else "tie"
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' , computerSelection == 'paper') {
        return 0
    }
    if (playerSelection == 'paper' , computerSelection == 'rock') {
        return 1
    }
    if (playerSelection == 'paper' , computerSelection == 'scissors') {
        return 0
    }
    if (playerSelection == 'scissors' , computerSelection == 'paper') {
        return 1
    }
    if (playerSelection == 'rock' , computerSelection == 'scissors') {
        return 1
    }
    if (playerSelection == 'scissors' , computerSelection == 'rock') {
        return 0
    }
    else {
        return -1
    }
}

// takes input and returns lowercase
function caseCleanup(input) {
    const cleanInput = input.toLowerCase();
    return cleanInput
}

// promt for input and compare clean output
function takeInput() {
    let input = window.prompt("Please input r, p, or s!");
    const cleanOutput = caseCleanup(input);
    if (cleanOutput == 'r') {`0`
        return "rock"
    }
    if (cleanOutput == 'p') {
        return "paper"
    }
    if (cleanOutput == 's') {
        return "scissors"
    }
}

// 
function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let turn = 0; turn < 5; turn++) {
        const playerSelection = takeInput();
        const computerSelection = computerplay();
        const result = playRound(playerSelection, computerSelection);
        
        // eval results => displays result on screen
        if (result == 0) {
            computerScore++
            window.alert("You Lose!")
        }
        else if (result == 1) {
            playerScore++
            window.alert("You Win!")
        }
        else if (result == -1) {
            window.alert("You Tie!")
        }
        else {
            window.alert('poop')
        }
    }

    window.alert(`Player: ${playerScore} | Computer: ${computerScore}`)
}
console.log(game())