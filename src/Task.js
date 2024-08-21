import { format } from "date-fns";
import { Priority } from "./Priority";
import { Common } from "./Common";


function Task(name = "test", description = "", priorityNumber = 1,
              date = format(new Date(), "d MMM h:m:s a")) {

    let common = Common(name, description);
    let tpriority = Priority(priorityNumber);
    let tdate = date;
    let tstate = "created";

    const getDate = () => format(tdate, "d MMM h:m:s a");
    const getPriority = () => tpriority;
    const getState = () => tstate;

    const setDate = (newDate) => {tdate = newDate};
    const setPriority = (newPriority) => {tpriority = newPriority};
    const setState = (newState) => {tstate = newState};
    
    return Object.assign({},common,{getDate, setDate, getPriority,
            setPriority, getState, setState});
}

export {Task};