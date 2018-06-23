const titleColor = document.getElementById('titleColor');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset');
const squares = Array.from(document.querySelectorAll('.square'));
const hardSquares = Array.from(document.querySelectorAll('.hard'));
let correctSquareColor;

function random(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

function randomColorString() {
    return `rgb(${random(0,256)},${random(0,256)},${random(0,256)})`;
}

function colorSquares() {
    squares.forEach((square)=> {
        square.style.backgroundColor = randomColorString();
        square.dataset.correct = false;
    });
    const correctSquareIndex = random(0, squares.length);
    correctSquareColor = randomColorString();
    squares[correctSquareIndex].style.backgroundColor = correctSquareColor;
    squares[correctSquareIndex].dataset.correct = "true";
    return correctSquareColor;
}

function setColors() {
    titleColor.innerText = colorSquares().toUpperCase();
}

squares.forEach((square)=> {
    square.addEventListener('click', ()=> {
        if(correctSquareColor) {
            if(square.dataset.correct === "true") {
                squares.forEach((square)=> {
                    square.style.backgroundColor = correctSquareColor;
                });
                answer.innerText = 'Correct!';
            } else {
                answer.innerText = 'Try Again!';
            }
        }
    });
});

reset.addEventListener('click', setColors);
setColors();