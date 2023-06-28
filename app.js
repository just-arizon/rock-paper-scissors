const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const btn = document.querySelectorAll('button');
let userChoice;
let computerChoice;

btn.forEach((item) => {
    item.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;

        getComputerChoice();
        getResult();
    })
})

function getComputerChoice(params) {
    const randomNumber = Math.floor(Math.random() * btn.length) + 1;

    if(randomNumber === 1){
      computerChoice = 'Rock';
    }

    if(randomNumber === 2){
      computerChoice = 'Paper';
    }

    if(randomNumber === 3){
      computerChoice = 'Scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
