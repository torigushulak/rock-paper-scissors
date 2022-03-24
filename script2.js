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
function playRound(playerSelection, computerPlay) {
    if (playerSelection == 'rock'& computerPlay == 'paper') {
        return 0
    }
    if (playerSelection == 'paper' & computerPlay == 'rock') {
        return 1
    }
    if (playerSelection == 'paper' & computerPlay == 'scissors') {
        return 0
    }
    if (playerSelection == 'scissors' & computerPlay == 'paper') {
        return 1
    }
    if (playerSelection == 'rock' & computerPlay == 'scissors') {
        return 1
    }
    if (playerSelection == 'scissors' & computerPlay == 'rock') {
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
    let result = window.prompt("Please input r, p, or s!");
    const cleanOutput = caseCleanup(result);
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

    let playerScore = 0;
    let computerScore = 0;

    for (let turn = 0; turn < 5; turn++) {
        const playerSelection = takeInput();
        const computerSelection = computerplay();
        const result = playRound(playerSelection, computerSelection);

        // comp win 
        if (result == 0) {
            computerScore += 1;
            window.alert("You Lose!")
        }
        // player win
        if (result == 1) {
            playerScore += 1;
            window.alert("You Win!")
        }
        // draw
        if (result == -1) {
            window.alert("You Tie!")
        }
    }
    window.alert(`Player Score: ${playerScore} | Computer Score: ${computerScore}`)
}

game()