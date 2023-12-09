let list =[{
    check:true,
    title: "Complete website"
}];

const container = document.getElementById("container");
function fetchList(){
    const htmlCode = list
    .map((item,index)=> `<div> 
    <input type="checkbox" onchange="changeCheck(${index},this.value)"  ${item.check ? "checked" : ""} />
    <input type="text" onchange="changeTitle(${index},this.value)" value="${item.title}" ${item.check ? "class='checked' " : ""} />
    <button onclick="remove(${index})">X</button>
    </div>`)
    .join("");
    container.innerHTML = htmlCode;

}



function add(){
    list.push({
        check: false,
        title:""
    });
    fetchList();
}
function remove(index){
    list.splice(index,1)
    fetchList();




}
function changeCheck(index){
    list[index].check = !(list[index].check);
    fetchList();

}
function changeTitle(index,value){
    list[index].title = value
    fetchList();
}







fetchList();