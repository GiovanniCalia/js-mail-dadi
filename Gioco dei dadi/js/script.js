let randomNumberPlayer = Math.floor(Math.random() * 7);
console.log(randomNumberPlayer);

let randomNumberComputer = Math.floor(Math.random() * 7);
console.log(randomNumberComputer);


if (randomNumberPlayer > randomNumberComputer){
    document.getElementById(`winner`).innerHTML = `The winner is: player`;
} else if (randomNumberPlayer < randomNumberComputer){
    document.getElementById(`winner`).innerHTML = `The winner is: computer`;
} else {
    document.getElementById(`winner`).innerHTML = `Draw`;
}


document.getElementById(`random-number-player`).innerHTML = `Number player: ` + randomNumberPlayer;
document.getElementById(`random-number-computer`).innerHTML = `Number computer: ` + randomNumberComputer;

