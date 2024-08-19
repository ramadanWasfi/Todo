import {format} from "date-fns";
import { Priority } from "./priority";

function Task(name = "", description = "", priority = Priority(1), date = format(new Date(), "d MMM h:m:s a")) {
    let tname = name;
    let tdescription = description;
    let tpriority = priority;
    let tdate = date;
    let tstate = "created";

    const getDate = () => format(tdate, "d MMM h:m:s a");
    const getPriority = () => tpriority;
    const getName = () => tname;
    const getDescription = () => tdescription;
    const getState = () => tstate;
    
    return {getDate, getDescription, getPriority, getName, getState};
}

export {Task};