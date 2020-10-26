let btnSubmit = document.getElementById("btn-submit");
let del = document.getElementsByClassName("btn-cancel");
let checkbox = document.getElementsByClassName("checkbox");

// let html = ""
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
    // add new task (cách 1)
    if (newTask == "") {
        alert("Please add your task")
    } else {
        document.getElementsByClassName("pending-tasks")[0].appendChild(li);
        document.getElementById("new-task").value = "";
    }
    // add new task (cách 2)
    // document.getElementsByClassName("pending-tasks")[0].innerHTML = html += `
    //     <div class="pending-task">
    //         <input type="checkbox" class="checkbox">
    //         <p>${newTask}</p>
    //         <button type="button" class="btn-cancel">X</button>
    //     </div>`
    // document.getElementById("new-task").value = "";

    for (let i = 0; i < del.length; i++) {
        del[i].addEventListener("click", delFunction)
    }
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].addEventListener("click", checkFunction);
    }


}

function delFunction(event) {
    let delBtn = event.target;
    delBtn.parentElement.remove();
}

function checkFunction() {
    let checkboxBtn = event.target;
    checkboxBtn.parentElement.classList.toggle("linethrough");
    // cách 2 cho linethrough
    // if (checkboxBtn.checked) {
    //     checkboxBtn.parentElement.classList.add("linethrough");
    // } else {
    //     checkboxBtn.parentElement.classList.remove("linethrough");
    // }
}


