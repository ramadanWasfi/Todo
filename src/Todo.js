export function Todo(name = "", description = "", tasks = []) {
    let tname = name;
    let tdescription = description;
    let ttasks = tasks;

    const getName = () => tname;
    const setName = (newName) => {tanme = newName};
    const getDescription = () => tdescription;
    const setDescription = (newDiscreption) => {tdescription = newDiscreption};
    const getTasks = () => ttasks;
    const setTasks = (newTasks) => ttasks = newTasks;

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
            getTasks, setTasks, getTaskByName, getTaskByPriorityNumber, getTaskByState};
}