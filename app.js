(function() { 
    const titleColor = document.getElementById('titleColor');
    const answer = document.getElementById('answer');
    const easy = document.getElementById('easy');
    const hard = document.getElementById('hard');
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

    function colorSquares(difficulty) {
        squares.forEach((square)=> {
            square.style.backgroundColor = randomColorString();
            square.dataset.correct = "false";
        });
        const correctSquareIndex = random(0, difficulty == 'hard' ? 6 : 3);
        correctSquareColor = randomColorString();
        squares[correctSquareIndex].style.backgroundColor = correctSquareColor;
        squares[correctSquareIndex].dataset.correct = "true";
        return correctSquareColor;
    }

    function setColors(difficulty) {
        titleColor.innerText = colorSquares(difficulty).toUpperCase();
    }

    function showHard() {
        setColors('hard')
        hardSquares.forEach(square=> {
            square.style.display = "block";
        });
    }

    function hideHard() {
        setColors('easy');
        hardSquares.forEach(square=> {
            square.style.display = "none";
        });
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

    easy.addEventListener('click', hideHard);
    hard.addEventListener('click', showHard);
    setColors('hard');
})();