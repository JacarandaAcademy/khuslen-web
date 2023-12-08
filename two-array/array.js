const array2=[
    ["red","blue","green"],
    ["john","jorge","messi"],
    ["short","medium","tall"]
];

let fullHtmlCode="";
for(const row of array2){
    const htmlCode = row.map(r=> `<span>${r}</span>`).join("");
 fullHtmlCode = fullHtmlCode + `<div>${htmlCode}</div>`
}




const container = document.getElementById("container");
container.innerHTML = fullHtmlCode;

