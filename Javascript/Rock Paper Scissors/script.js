let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");

const genCompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);
    const compChoice = genCompchoice();
    console.log("compChoice = ", compChoice);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});