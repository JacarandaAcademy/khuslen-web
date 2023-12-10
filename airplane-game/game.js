let plane = [
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),
    Array(10).fill("X"),

];

let life = 10;
let isWin = false;

const message = document.getElementById("message");
message.innerText = `You have ${life} lives`;
// d=0

function checkPostion(x, y, d) {
    switch (d) {
        case 0:
            return (x - 2 > 0 && x + 2 < 10 && y + 3 < 10);
        case 1:
            return (x - 2 > 0 && x + 2 < 10 && y - 3 > 0);
        case 2:
            return (x + 3 < 10 && y - 2 > 0 && y + 2 < 10);
        case 3:
            return (x - 3 > 0 && y - 2 > 0 && y + 2 < 10);
        default:
            return false;
    }

}

function getPlane() {
    let y, x, d;
    do {
        y = Math.floor(Math.random() * 10);
        x = Math.floor(Math.random() * 10);
        d = Math.floor(Math.random() * 4);
    } while (!checkPostion(x, y, d));

    switch (d) {
        case 0:
            plane[y][x] = 'O';
            plane[y + 1][x - 2] = 'C';
            plane[y + 1][x - 1] = 'C';
            plane[y + 1][x] = 'C';
            plane[y + 1][x + 1] = 'C';
            plane[y + 1][x + 2] = 'C';
            plane[y + 2][x] = 'C';
            plane[y + 3][x - 1] = 'C';
            plane[y + 3][x] = 'C';
            plane[y + 3][x + 1] = 'C';
            break;
        case 1:
            plane[y][x] = 'O';
            plane[y - 1][x - 2] = 'C';
            plane[y - 1][x - 1] = 'C';
            plane[y - 1][x] = 'C';
            plane[y - 1][x + 1] = 'C';
            plane[y - 1][x + 2] = 'C';
            plane[y - 2][x] = 'C';
            plane[y - 3][x - 1] = 'C';
            plane[y - 3][x] = 'C';
            plane[y - 3][x + 1] = 'C';
            break;
        case 2:
            plane[y][x] = 'O';
            plane[y + 2][x + 1] = 'C';
            plane[y + 1][x + 1] = 'C';
            plane[y][x + 1] = 'C';
            plane[y - 1][x + 1] = 'C';
            plane[y - 2][x + 1] = 'C';
            plane[y][x + 2] = 'C';
            plane[y + 1][x + 3] = 'C';
            plane[y][x + 3] = 'C';
            plane[y - 1][x + 3] = 'C';
            break;
        case 3:
            plane[y][x] = 'O';
            plane[y + 2][x - 1] = 'C';
            plane[y + 1][x - 1] = 'C';
            plane[y][x - 1] = 'C';
            plane[y - 1][x - 1] = 'C';
            plane[y - 2][x - 1] = 'C';
            plane[y][x - 2] = 'C';
            plane[y + 1][x - 3] = 'C';
            plane[y][x - 3] = 'C';
            plane[y - 1][x - 3] = 'C';
            break;

    }
}

let htmlCode = "";
let rowNumber = 0;
getPlane();
htmlCode = `<div style="display:inline-block">
<div>1</div>
<div>2</div>
</div>`;
for (const row of plane) {
    let colNumber = 0;
    let html = "";

    for (const col of row) {
        const id = `btn${rowNumber}${colNumber}`;
        html += `<div id="${id}" class="button" onClick='check("${id}","${col}")'><i class="fa-solid fa-circle"></i> </div>`
        colNumber++;
    }
    htmlCode += `<div>${html}</div>`;
    rowNumber++;
}

const container = document.getElementById("container");
container.innerHTML = htmlCode;
const failure = new Audio("splash.mp3");
const success = new Audio("destroy.mp3");
const hit = new Audio("bullet.mp3");

function check(id, value) {
    const btn = document.getElementById(id);
    if (life === 0 || isWin === true || btn.innerHTML.indexOf("fa-circle") < 0) {
        return;
    }
    const m = document.getElementById("message");
    switch (value) {
        case "X": {
            btn.innerHTML = '<i class="fa-solid fa-face-laugh-squint"></i>';
            life--;
            m.innerText = `You have ${life} lives`;

            failure.play();
            break;
        }
        case "C": {
            btn.innerHTML = '<i class="fa fa-dot-circle-o" ></i>';
            life--;
            m.innerText = `You have ${life} lives`;
            hit.play();
            break;
        }
        case "O": {
            btn.innerHTML = '<i class="fa-solid fa-skull-crossbones"></i>';
            m.innerText = `You win :)`;
            isWin = true;
            success.play();
        }
    }
    if (life === 0) {
        m.innerText = "You are dead Ha Ha Ha !!!";
    }
}
