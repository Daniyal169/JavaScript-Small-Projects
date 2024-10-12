
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");


// to add todo
addBtn.addEventListener("click", () => {
    if (todoInput.value === '') {
        alert("Todo List Empty")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = todoInput.value;
        todoList.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    todoInput.value = "";
    savaData();
})


// to marked todo completed and remove it
todoList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savaData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savaData();
    }
}, false)


// store todo in localstorage
savaData = () => {
    localStorage.setItem("Data", todoList.innerHTML);
}

// to show on listi from localStorage
showData = () => {
    todoList.innerHTML = localStorage.getItem("Data");
}
showData();