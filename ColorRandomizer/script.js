const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hexLabel = document.querySelector('.hex');
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

hexBtn.addEventListener('click', getHex);

onload = function() {
    if (isDarkMode) {
        hexLabel.innerHTML = "#14192B";
    } else {
        hexLabel.innerHTML = "#FAFAFA";
    }
}

function getHex() {
    let hexCol = '#';
    for (let i=0;i<6;i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random];
    }

    bodyBcg.style.backgroundColor = hexCol;
    hexLabel.innerHTML = hexCol;
}