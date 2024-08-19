import { Todo } from "./Todo";

export function Project(name = "test project", description = "nice project", todos = []) {
    let pname = name;
    let pdescription = pdescription;
    let ptodos = todos;

    const getProjectName = () => pname;
    const getProjectDescription = () => pdescription;
    const getProjectTodos = () => ptodos;
    const getProjectTodoByName = (tname) => {
        let [todo] = ptodos.filter(todo => todo.getName() === tname);
        return todo;
    };

    const setProjectName = (newName) => {pname = newName};
    const setProjectDescription = (newDescription) => {pdescription = newDescription};
    const setProjectTodos = (newTodos) => {ptodos = newTodos};
}