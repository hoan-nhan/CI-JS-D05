let completedCount = 0;
let pendingCount = 0;
let checkbox = document.getElementsByClassName("checkbox");
export function addFuntion() {
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
        // pending count at the beg
        pendingCount ++;
        document.getElementById("to-do-count").innerText = pendingCount;
    }

    // let del = document.getElementsByClassName("btn-cancel");
    // for (let i = 0; i < del.length; i++) {
    //     del[i].addEventListener("click", delFunction)
    // }
    // for (let i = 0; i < checkbox.length; i++) {
    //     checkbox[i].addEventListener("click", checkFunction);
    // }

    spanCheck.addEventListener("click",checkFunction)
    delBtn.addEventListener("click",delFunction)
}

export function delFunction(event) {
    let delBtn = event.target;
    delBtn.parentElement.remove();
    let thisCheckbox = delBtn.parentElement.getElementsByClassName("checkbox")[0];
    if (thisCheckbox.checked) {
        completedCount--;
    } else {
        pendingCount--;
    }
    document.getElementById("to-do-count").innerText = pendingCount;
    document.getElementById("completed-count").innerText = completedCount;
}

export function checkFunction() {
    let checkboxBtn = event.target;
    checkboxBtn.parentElement.classList.toggle("linethrough");

    if (checkboxBtn.checked) {
        completedCount++;
        pendingCount = checkbox.length - completedCount;
    } else {
        completedCount--;
        pendingCount = checkbox.length - completedCount;
    }
    // update pending & completed count
    document.getElementById("to-do-count").innerText = pendingCount;
    document.getElementById("completed-count").innerText = completedCount;
}