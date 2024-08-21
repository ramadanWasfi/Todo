import { Todo , createTodoElement} from "./Todo";
import { Common
    
 } from "./Common";
function Project(name = "test project", description = "nice project", todos = []) {
   
    let common = Common(name, description);
    let ptodos = todos;

  
    const getTodos = () => ptodos;
    const getTodoByName = (tname) => {
        let [todo] = ptodos.filter(todo => todo.getName() === tname);
        return todo;
    };
    const setTodos = (newTodos) => {ptodos = newTodos};

    return Object.assign({},common,{getTodos, getTodoByName, setTodos});
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