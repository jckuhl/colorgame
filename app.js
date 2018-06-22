const titleColor = document.getElementById('titleColor');

function random(min, max) {
    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

function titleColorString() {
    return `rgb(${random(0,256)},${random(0,256)},${random(0,256)})`;
}

titleColor.innerText = titleColorString().toUpperCase();