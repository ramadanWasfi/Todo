import {Task, createTaskElement} from "./Task";

function Todo(name = "", description = "", tasks = []) {
    let tname = name;
    let tdescription = description;
    let ttasks = tasks;

    const getName = () => tname;
    const setName = (newName) => {tanme = newName};
    const getDescription = () => tdescription;
    const setDescription = (newDiscreption) => {tdescription = newDiscreption};
    const getTasks = () => ttasks;
    const setTasks = (newTasks) => ttasks = newTasks;
    const addNewTask = (newTask) => {
        ttasks.push(newTask);
        console.log("new task added");
        console.log("current tasks are ");
        ttasks.forEach(task => console.log(task));
    }

    const getTaskByName = (taskName) => {
        let [task] = ttasks.filter(task => task.getName() === taskName);
        return task;
    }

    const getTaskByPriorityNumber = (taskPriorityNumber) => {
        let [task] = ttasks.filter(task => task.getPriority().getNumber() === taskPriorityNumber);
        return task;
    }

    const getTaskByState = (taskState) => {
        let [task] = ttasks.filter(task => task.getState() === taskState);
        return task;
    }

    return {getName, setName, getDescription, setDescription,
            getTasks, setTasks, getTaskByName, getTaskByPriorityNumber, getTaskByState, addNewTask};
}


function createTodoElement(todo) {
    const todoContainer = document.createElement("div");
    todoContainer.setAttribute("class","todoContainer");

    const todoNameContainer = document.createElement("div");
    todoNameContainer.setAttribute("class","todoNameContainer");

    const todoDescriptionContainer = document.createElement("div");
    todoDescriptionContainer.setAttribute("class","todoDescriptionContainer");

    const todoTasksContainer = document.createElement("div");
    todoTasksContainer.setAttribute("class","todoTasksContainer");

    const tasks = todo.getTasks();
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        todoTasksContainer.appendChild(taskElement);
    })
       
    

    const todoDescriptionElement = document.createElement('p');
    todoDescriptionElement.textContent = todo.getDescription();

    const todoNameElement = document.createElement('p');
    todoNameElement.textContent = todo.getName();

    const todoRemoveButton = document.createElement("button");
    todoRemoveButton.textContent = "x";
    todoRemoveButton.setAttribute("type","button");
    todoRemoveButton.setAttribute("class","todoRemoveButton");

    todoDescriptionContainer.appendChild(todoDescriptionElement);
    todoNameContainer.appendChild(todoNameElement);
    todoNameContainer.appendChild(todoRemoveButton);

    todoContainer.appendChild(todoNameContainer);
    todoContainer.appendChild(todoDescriptionContainer);
    todoContainer.appendChild(todoTasksContainer);

    return todoContainer;
}

export {Todo, createTodoElement}