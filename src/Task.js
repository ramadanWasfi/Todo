import { format } from "date-fns";
import { Priority } from "./Priority";

function Task(name = "test", description = "", priorityNumber = 1,
              date = format(new Date(), "d MMM h:m:s a")) {
    let tname = name;
    let tdescription = description;
    let tpriority = Priority(priorityNumber);
    let tdate = date;
    let tstate = "created";

    const getDate = () => format(tdate, "d MMM h:m:s a");
    const getPriority = () => tpriority;
    const getName = () => tname;
    const getDescription = () => tdescription;
    const getState = () => tstate;

    const setDate = (newDate) => {tdate = newDate};
    const setPriority = (newPriority) => {tpriority = newPriority};
    const setName = (newName) => {tname = newName};
    const setDescription = (newDescription) => {tdescription = newDescription};
    const setState = (newState) => {tstate = newState};
    
    return {getDate, setDate, getDescription, setDescription, getPriority,
            setPriority, getName, setName, getState, setState};
}

export {Task};