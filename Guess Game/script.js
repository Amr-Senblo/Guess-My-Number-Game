'strict mode'
const messege = document.querySelector('.messege').textContent;

let guess = Number(document.querySelector('.guess').value)

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


console.log(guess, num);

const performAction = () => {
    let guess = Number(document.querySelector('.guess').value)
    // document.querySelector('.number').textContent = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.messege').textContent = "⛔ NO Number";
    } else if (num === guess) {
        document.querySelector('.messege').textContent = "👌 Correct Number";
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = num;
        document.querySelector('h1').innerHTML = '💥YOU WIN!!💥';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > num && score > 1) {
        document.querySelector('.messege').textContent = "⚡ Too High!!";
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < num && score > 1) {
        document.querySelector('.messege').textContent = "📉 Too Low!!";
        score--;
        document.querySelector('.score').textContent = score;
    } else if (score <= 1) {
        document.querySelector('.messege').textContent = "👽 You Lost The Game!!";
        document.querySelector('h1').innerHTML = '❌GAME OVER❌';
        document.querySelector('body').style.backgroundColor = 'red';

        score = 0;
        document.querySelector('.score').textContent = score;
    }

}

document.querySelector('.check').addEventListener('click', performAction)



const resetSite = () => {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('h1').innerHTML = 'Guess My Number!';
    document.querySelector('.messege').textContent = "Start Guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = '0';

    score = 20;
    num = Math.trunc(Math.random() * 20) + 1;
}

document.querySelector('.again').addEventListener('click', resetSite)