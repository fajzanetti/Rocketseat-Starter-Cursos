let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let btnElement = document.querySelector("button")

let todos = JSON.parse(localStorage.getItem("list_todos")) || []

function renderToDos(){
    listElement.innerHTML = ""

    for (let todo of todos){
        let todoElement = document.createElement("li")
        let todoText    = document.createTextNode(todo)

        let linkElement = document.createElement("a")
        let linkText    = document.createTextNode("Excluir")

        linkElement.setAttribute("href", "#")

        let pos = todos.indexOf(todo)
        linkElement.setAttribute("onclick", "deleteToDo("+pos+")")

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderToDos()

function addToDo(){
    let todoText = inputElement.value

    if (todoText != null && todoText != ""){
        todos.push(todoText)
        inputElement.value = ""
        renderToDos()
        saveToStorage()
    }
}

function deleteToDo(pos){
    todos.splice(pos, 1)
    renderToDos()
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos))
}

btnElement.onclick = addToDo
