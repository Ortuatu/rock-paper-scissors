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
    let play = prompt("Choose: Rock, Paper, or Scissors?");

    if (play.toLowerCase() === "rock") {
        hum = "Rock"
        console.log(hum)
    } else if (play.toLowerCase() === "paper") {
        hum = "Paper"
        console.log(hum)
    } else  if (play.toLowerCase() === "scissors" || play.toLowerCase() === "scissor") {
        hum = "Scissors"
        console.log(hum)
    } else {
        alert("Please enter Rock, Paper, or Scissors")
        getHumanChoice()
    }

}


let humanScore = 0;
let computerScore = 0;
let rounds = 1;



function playGame() {
    while (rounds <= 5) {
        getComputerChoice();
        getHumanChoice();
        playRound(hum, comp);
        console.log(`Your Score: ${humanScore}\nComputers Score: ${computerScore}\nRound: ${rounds}`)
    }

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (humanScore < computerScore) {
        console.log("You lose the game!")
    } else {
        console.log("The game is a Tie!")
    }

    function playRound(hum, comp) {
        if (hum === comp && rounds <= 5) {
            console.log(`Your choice: ${hum}`)
            console.log(`Computers choice: ${comp}`)
            console.log("It's a tie, try again!")
            rounds++;
        } else if (((hum === "Rock" && comp === "Scissors") || (hum === "Paper" && comp === "Rock") || (hum === "Scissors" && comp === "Paper")) && rounds <= 5) { 
            console.log(`Your choice: ${hum}`)
            console.log(`Computers choice: ${comp}`)
            console.log("You win!!!")
            const h = humanScore++
            rounds++;
        } else if(((hum === "Rock" && comp === "Paper") || (hum === "Paper" && comp === "Scissors") || (hum === "Scissors" && comp === "Rock")) && rounds <= 5) {
            console.log(`Your choice: ${hum}`)
            console.log(`Computers choice: ${comp}`)
            console.log("You lose!!!")
            const c = computerScore++
            rounds++;
        }
    }
}


playGame();