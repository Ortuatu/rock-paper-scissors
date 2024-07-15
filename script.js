let comp;
let hum;


let getComputerChoice = function () {
    let x = Math.floor(Math.random() * 3);


    if (x === 0) {
        comp = "Rock"
        console.log(comp)
    } else if (x === 1) {
        comp = "Paper"
        console.log(comp)
    } else {
        comp = "Scissors"
        console.log(comp)
    }
}


let getHumanChoice = function () {

    document.getElementById('rock').addEventListener('click', () => {
        hum = "Rock";
        playGame();
    });
    
    document.getElementById('paper').addEventListener('click', () => {
        hum = "Paper";
        playGame();
    });
    
    document.getElementById('scissors').addEventListener('click', () => {
        hum = "Scissors";
        playGame();
    });

}


let humanScore = 0;
let computerScore = 0;
let rounds = 0;



function playGame() {
    if ((humanScore >= 5) || (computerScore >= 5)) {
        if (humanScore > computerScore) {
            console.log("You win the game!");
            document.getElementById('match').textContent = "You win the game!";
        } else if (humanScore < computerScore) {
            console.log("You lose the game!");
            document.getElementById('match').textContent = "You lose the game!";
        } else {
            console.log("The game is a Tie!");
            document.getElementById('match').textContent = "The game is a Tie!";
        }
        return;
    }

    getComputerChoice();
    playRound(hum, comp);
    console.log(`Your Score: ${humanScore}\nComputer's Score: ${computerScore}\nRound: ${rounds}`);
    document.getElementById('result').textContent = `Your Score: ${humanScore}\nComputer's Score: ${computerScore}\nRound: ${rounds}`;

    function playRound(hum, comp) {
        if (hum === comp) {
            console.log(`Your choice: ${hum}`)
            console.log(`Computers choice: ${comp}`)
            console.log("It's a tie, try again!")
            document.getElementById('match').textContent = `Your choice: ${hum}, Computers choice: ${comp}, It's a tie, try again!`;
            rounds++;
        } else if (((hum === "Rock" && comp === "Scissors") || (hum === "Paper" && comp === "Rock") || (hum === "Scissors" && comp === "Paper"))) { 
            console.log(`Your choice: ${hum}`)
            console.log(`Computers choice: ${comp}`)
            console.log("You win!!!")
            document.getElementById('match').textContent = `Your choice: ${hum}, Computers choice: ${comp}, You win!!!`;
            const h = humanScore++
            rounds++;
        } else if(((hum === "Rock" && comp === "Paper") || (hum === "Paper" && comp === "Scissors") || (hum === "Scissors" && comp === "Rock"))) {
            console.log(`Your choice: ${hum}`)
            console.log(`Computers choice: ${comp}`)
            console.log("You lose!!!")
            document.getElementById('match').textContent = `Your choice: ${hum}, Computers choice: ${comp}, You lose!!!`;
            const c = computerScore++
            rounds++;
        }
    }
}




document.addEventListener('DOMContentLoaded', (event) => {
    getHumanChoice();
});