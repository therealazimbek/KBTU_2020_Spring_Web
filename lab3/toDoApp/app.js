// elements

const newTask = document.querySelector('#new');
const addTaskBtn = document.querySelector('#addNewTask');
const toDo = document.querySelector(".todo-list ul");

// showing data
const date = document.querySelector('.date')

const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();

date.innerHTML = today.toLocaleDateString("en-US", options);

// functions

let createNewTask = function(task) {
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    let deleteItem = document.createElement('i')

    label.innerText = task;

    checkBox.type = 'checkbox';
    checkBox.style.marginRight = '10px'

    deleteItem.innerText = ''
    deleteItem.className = 'fa-solid fa-trash'

    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    listItem.appendChild(deleteItem)

    return listItem
}

let addTask = () => {
    if (newTask.value) {
        let listItem = createNewTask(newTask.value)
        toDo.appendChild(listItem)
        newTask.value = ''
    }
}

let completedTask = (element) => {
    element.addEventListener('change', function() {
        if (this.checked) {
            element.parentNode.querySelector('label').style.textDecoration = 'line-through'
            element.parentNode.querySelector('label').style.color = 'rgba(0, 0, 0, 0.5)'
        } else {
            element.parentNode.querySelector('label').style.textDecoration = 'none'
            element.parentNode.querySelector('label').style.color = 'rgba(0, 0, 0)'
        }
    })
}

let deleteTask = (ul, li) => {
    ul.removeChild(li)
}

// add button handler
addTaskBtn.addEventListener('click', addTask)

// using enter to add
newTask.addEventListener("keyup", (event)=> {
    if (event.code === 'Enter') {
        event.preventDefault()
        document.getElementById('addNewTask').click()
    }
})

// handling complete and delete task
toDo.addEventListener('click', (event) => {
    let element = event.target
    if (element.tagName.toLowerCase() === 'input') {
        completedTask(element)
    }
    if (element.tagName.toLowerCase() === 'i') {
        let ul = element.parentNode.parentNode
        let li = element.parentNode
        deleteTask(ul, li)
    }
})
