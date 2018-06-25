(function() { 
    const squares = Array.from(document.querySelectorAll('.square'));
    const hardSquares = Array.from(document.querySelectorAll('.hard'));
    let correctSquareColor;
    let difficulty = 'hard';

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

    function setColors(difficulty = 'hard') {
        document.getElementById('titleColor').innerText = colorSquares(difficulty).toUpperCase();
    }

    function showHard() {
        difficulty = 'hard';
        setColors(difficulty)
        hardSquares.forEach(square=> {
            square.style.display = "block";
        });
    }

    function hideHard() {
        difficulty = 'easy';
        setColors(difficulty);
        hardSquares.forEach(square=> {
            square.style.display = "none";
        });
    }


    squares.forEach((square)=> {
        square.addEventListener('click', ()=> {
            if(correctSquareColor) {
                const answer = document.getElementById('answer');
                if(square.dataset.correct === "true") {
                    squares.forEach((square)=> {
                        square.style.backgroundColor = correctSquareColor;
                    });
                    answer.innerText = 'Correct!';
                    setTimeout(()=> {
                        setColors();
                        answer.innerText = 'Click a Square!';
                    },1000);
                } else {
                    answer.innerText = 'Try Again!';
                }
            }
        });
    });

    document.getElementById('easy').addEventListener('click', hideHard);
    document.getElementById('hard').addEventListener('click', showHard);
    setColors();
})();