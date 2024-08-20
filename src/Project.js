import { Todo } from "./Todo";

export function Project(name = "test project", description = "nice project", todos = []) {
    let pname = name;
    let pdescription = pdescription;
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
}


