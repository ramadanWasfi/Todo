import { Todo , createTodoElement} from "./Todo";

function Project(name = "test project", description = "nice project", todos = []) {
    let pname = name;
    let pdescription = description;
    let ptodos = todos;

    const getName = () => pname;
    const getDescription = () => pdescription;
    const getTodos = () => ptodos;
    const getTodoByName = (tname) => {
        let [todo] = ptodos.filter(todo => todo.getName() === tname);
        return todo;
    };

    const setName = (newName) => {pname = newName};
    const setDescription = (newDescription) => {pdescription = newDescription};
    const setTodos = (newTodos) => {ptodos = newTodos};

    return {getName, getDescription, getTodos, getTodoByName, setName, setDescription, setTodos};
}


function createProjectElement(project) {
    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("class","projectContainer");

    const projectNameContainer = document.createElement("div");
    projectNameContainer.setAttribute("class","projectNameContainer");

    const projectDescriptionContainer = document.createElement("div");
    projectDescriptionContainer.setAttribute("class","projectDescriptionContainer");

    const projectTodosContainer = document.createElement("div");
    projectTodosContainer.setAttribute("class","projectTodosContainer");

    const todos = project.getTodos();
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        projectTodosContainer.appendChild(todoElement);
    })
       
    

    const projectDescriptionElement = document.createElement('p');
    projectDescriptionElement.textContent = project.getDescription();

    const projectNameElement = document.createElement('p');
    projectNameElement.textContent = project.getName();

    projectDescriptionContainer.appendChild(projectDescriptionElement);
    projectNameContainer.appendChild(projectNameElement);

    projectContainer.appendChild(projectNameContainer);
    projectContainer.appendChild(projectDescriptionContainer);
    projectContainer.appendChild(projectTodosContainer);

    return projectContainer;
}

export {Project, createProjectElement};