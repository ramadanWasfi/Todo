import { Common } from "./Common";

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

export {Project};