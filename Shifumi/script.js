const buttons = document.querySelectorAll('.btn-choix');
const resultDisplay = document.getElementById('affichage');
const winDisplay = document.getElementById('win');
const loseDisplay = document.getElementById('lose');
const drawDisplay = document.getElementById('draw');
const resetButton = document.getElementById('reset');

const choices = ['Pierre', 'Feuille', 'Ciseaux'];
const score = { win: 0, lose: 0, draw: 0};

function pluralize(count, singular, plural){
    return count + ' ' + (count > 1 ? plural : singular);
}

function updateScore() {
    winDisplay.textContent = pluralize(score.win, "WIN", "WINS");
    loseDisplay.textContent = pluralize(score.lose, "LOSE", "LOSES");
    drawDisplay.textContent = pluralize(score.draw, "DRAW", "DRAWS");
}

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        const playerChoice = button.querySelector('img').alt;
        const robotChoice = choices[Math.floor(Math.random() * 3)];
        let outcome;

        if (playerChoice === robotChoice){
            outcome = 'draw';
        } else if (
            (playerChoice === 'Pierre' && robotChoice === 'Ciseaux') ||
            (playerChoice === 'Feuille' && robotChoice === 'Pierre') ||
            (playerChoice === 'Ciseaux' && robotChoice === 'Feuille')
        ){
            outcome = 'win';
        } else{
            outcome = 'lose';
        }

        score[outcome]++;
        updateScore();
        resultDisplay.innerHTML = `
        J'ai joué : ${playerChoice}<br>
        Le robot a joué : ${robotChoice}<br>
        C'est une <strong class="${outcome}">${outcome === 'draw' ? 'égalité' : outcome === 'win' ? 'victoire' : 'défaite'}</strong>`;
    })
});

resetButton.addEventListener('click', () => {
    // score.win = 0;
    // score.lose = 0;
    // score.draw = 0;
    // updateScore();
    // resultDisplay.textContent = '';
    window.location.reload();
})