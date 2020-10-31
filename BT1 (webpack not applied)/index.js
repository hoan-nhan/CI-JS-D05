let btnSubmit = document.getElementById("btn-submit");
let checkbox = document.getElementsByClassName("checkbox");

btnSubmit.addEventListener("click", addFuntion)
function addFuntion() {
    let newTask = document.getElementById("new-task").value;
    console.log(newTask)
    let li = document.createElement("li");
    let text = document.createTextNode(newTask);
    li.appendChild(text);
    // create checkbox
    let spanCheck = document.createElement("input");
    let attrCheck = document.createAttribute("type");
    attrCheck.value = "checkbox";
    spanCheck.classList.add("checkbox");
    spanCheck.setAttributeNode(attrCheck);
    li.insertBefore(spanCheck, text);
    // create del btn
    let delBtn = document.createElement("button");
    let attrDel = document.createAttribute("type");
    let x = document.createTextNode("X");
    delBtn.appendChild(x);
    attrDel.value = "button";
    delBtn.classList.add("btn-cancel");
    li.appendChild(delBtn);
    // add new task 
    if (newTask == "") {
        alert("Please add your task")
    } else {
        document.getElementsByClassName("pending-tasks")[0].appendChild(li);
        document.getElementById("new-task").value = "";
    }

    // for (let i = 0; i < del.length; i++) {
    //     del[i].addEventListener("click", delFunction)
    // }
    // for (let i = 0; i < checkbox.length; i++) {
    //     checkbox[i].addEventListener("click", checkFunction);
    // }
}

let del = document.getElementsByClassName("btn-cancel");
console.log(del);
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener("click", delFunction)
    console.log(del[i]);
    // del[i].onclick() = delFunction();
}
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", checkFunction);
}

function delFunction(event) {
    let delBtn = event.target;
    delBtn.parentElement.remove();
}

function checkFunction() {
    let checkboxBtn = event.target;
    checkboxBtn.parentElement.classList.toggle("linethrough");
}


