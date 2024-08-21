import {Common} from "./Common";

function Todo(name = "", description = "", tasks = []) {

    let common = Common(name, description);
    let ttasks = tasks;

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

    return Object.assign({},common,{getTasks, setTasks, getTaskByName, getTaskByPriorityNumber, getTaskByState, addNewTask});
}

export {Todo}