// randon integer chooses from array
function computerplay() {
    const rps = ['rock', 'paper', 'scissors'];
    const rand = rps.getRandomInt();
    return rand
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
function caseCleanup() {
    const cleanInput = input.toLowerCase();
    return cleanInput
}

// promt for input and compare clean output
function takeInput() {
    result = window.prompt("Please input r, p, or s!");
    const cleanOutput = result.caseCleanup();
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
    for (let turn = 0; turn < 5; i++) {
        const playerSelection = takeInput();
        const computerPlay = computerplay();
        const result = playRound();

        console.log("titties")
        
    }
    console.log("titties")
        
        // if (result == 0) {
        //     return window.alert("You Lose!")
        // }
        // if (result == 1) {
        //     return window.alert("You Win!")
        // }
        // if (result == -1) {
        //     return window.alert("You Tie!")
        // }
        // else {
        //     return window.alert("Input not valid");
        // }
    
}
console.log(game())