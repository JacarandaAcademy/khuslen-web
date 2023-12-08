let board=[
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X"),
    Array(5).fill("X")
];

const rr = Math.floor(Math.random() * 5);
const rc = Math.floor(Math.random() * 5);
board[rr][rc] ="O";


let htmlCode = "";

let rowNumber=0;
for(const row of board){
    let colNumber = 0;
    let html = "";

    for(const col of row){
        const id=`btn${rowNumber}${colNumber}`;
        html += `<button id="${id}"  onClick='check("${id}","${col}")'></button>`
        colNumber++;
    }
    htmlCode += `<div>${html}</div>`;
    rowNumber++;
}

const container = document.getElementById("container");
container.innerHTML = htmlCode;

function check(id,value){
   const btn = document.getElementById(id);
   btn.innerText = value;
}