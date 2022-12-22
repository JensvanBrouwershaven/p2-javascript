const computerChoice = document.getElementById('computer-choice');
const playerChoice = document.getElementById("player-choice");
const possibleChoices = document.querySelectorAll('button');
let resultOutput = document.getElementById("result");
let computer
let player
let result
possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice()
    getResult()
}));
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() *3) +1;
    if(randomNumber == 1){
        computer = "rock"
        computerChoice.innerHTML = computer;
        
    }
    else if(randomNumber == 2){
        computer = "paper"
        computerChoice.innerHTML = computer;

    }
    else{
        computer = "scissors"
        computerChoice.innerHTML = computer;

    }
}

function getResult(){
    if(computer == "rock" && player == "rock"){

    resultOutput.innerText = "Gelijkspel!"
}
else if(computer == "rock" && player == "paper"){
    resultOutput.innerText = "U wint!"
}
else if(computer == "rock" && player == "scissors"){
    resultOutput.innerText = "U verliest!"
}
else if(computer == "paper" && player == "paper"){
    resultOutput.innerText = "Gelijkspel!"
}
else if(computer == "paper" && player == "scissors"){
    resultOutput.innerText = "U wint!"
}
else if(computer == "paper" && player == "rock"){
    resultOutput.innerText = "U Verliest!"
}
else if(computer == "scissors" && player == "paper"){
    resultOutput.innerText = "U verliest!"
}
else if(computer == "scissors" && player == "scissors"){
    resultOutput.innerText = "Gelijkspel!"
}
else if(computer == "scissors" && player == "rock"){
    resultOutput.innerText = "U Wint!"
};
}