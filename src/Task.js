import { format } from "date-fns";
import { Priority } from "./Priority";
import { Common } from "./Common";

import "./style.css";

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

function createTaskElement(task) {
        const taskContainer = document.createElement("div");
        taskContainer.setAttribute("class","taskContainer");

        const taskMainContainer = document.createElement("div");
        taskMainContainer.setAttribute("class","taskMainContainer");

        const taskDescriptionContainer = document.createElement("div");
        taskDescriptionContainer.setAttribute("class","taskDescriptionContainer");

        const taskMainContainerLeftPart = document.createElement("div");
        taskMainContainerLeftPart.setAttribute("class","taskMainContainerLeftPart");

        const taskMainConainerRightPart = document.createElement("div");
        taskMainConainerRightPart.setAttribute("class","taskMainConainerRightPart");


        const taskDateElement = document.createElement('p');
        taskDateElement.textContent = task.getDate();

        const taskPriorityElement = document.createElement("div");
        taskPriorityElement.textContent = task.getPriority().getNumber();

        const taskDescriptionElement = document.createElement("label");
        taskDescriptionElement.textContent = task.getDescription();
        taskDescriptionElement.setAttribute("for","taskCheckBox");
        

        const taskCheckBox = document.createElement("input");
        taskCheckBox.setAttribute("type", "checkbox");
        taskCheckBox.setAttribute("id","taskCheckBox");
        taskCheckBox.setAttribute("name","task_state");

        taskMainContainerLeftPart.appendChild(taskCheckBox);
        taskMainContainerLeftPart.appendChild(taskDescriptionElement);

        taskMainConainerRightPart.appendChild(taskDateElement);
        taskMainConainerRightPart.appendChild(taskPriorityElement);

        taskMainContainer.appendChild(taskMainContainerLeftPart);
        taskMainContainer.appendChild(taskMainConainerRightPart);

        taskContainer.appendChild(taskMainContainer);

        return taskContainer;
}




export {Task, createTaskElement};