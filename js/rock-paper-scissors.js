let score = JSON.parse(localStorage.getItem
("score")) || {
    wins: 0,
    loses: 0,
    ties: 0
};

updateScore()

function play(userChoice) {

    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        document.getElementById("result").innerHTML = "It's a draw!"
        score.ties += 1;
    } else {
        if (userChoice === "rock" && computerChoice === "paper" ||
            userChoice === "paper" && computerChoice === "scissors" ||
            userChoice === "scissors" && computerChoice === "rock") {

            document.getElementById("result").innerHTML = "You lose!"
            score.loses += 1;

        } else {
            document.getElementById("result").innerHTML = "You win!"
            score.wins += 1;
        }
    }
    updateScore()
    showMoves(userChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function updateScore() {
    document.getElementById("wins").textContent = score.wins;
    document.getElementById("loses").textContent = score.loses;
    document.getElementById("ties").textContent = score.ties;
}

function showMoves(userChoice, computerChoice) {
    document.getElementById("moves").innerHTML =
        `You -
            <img src="images/${userChoice}.png" class="img" alt="rock">
            <img src="images/${computerChoice}.png" class="img" alt="paper">
            - Computer`;
}

function resetGame() {
    score.wins = 0
    score.loses = 0
    score.ties = 0
    localStorage.removeItem("score");
    updateScore()
    document.getElementById("result").innerHTML = "Let's start!";
    document.getElementById("moves").innerHTML = "";
}
