const inputBox = document.getElementById("input-box");
const listContaianer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Write something")
    }
    else{
       let li = document.createElement("li");
       li.innerHTML = inputBox.value;
       listContaianer.appendChild(li); 
       let span = document.createElement("span");
       span.innerHTML = "\u00d7";
       li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContaianer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContaianer.innerHTML);

}

function displayTask(){
    listContaianer.innerHTML =localStorage.getItem("data");
}

displayTask();

