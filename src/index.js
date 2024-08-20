import {Task, createTaskElement} from "./Task";
import { Todo, createTodoElement } from "./Todo";
import "./style.css";

const task = Task("task A", 'aa',2);
const task2 = Task("task b", 'd', 1);
const task3 = Task("task basda", 'asdasdasad', 4);

task.setState("finished");
const taskElement = createTaskElement(task);
let container = document.querySelector(".container");
container.appendChild(taskElement);

const todo = Todo("health todo","some tasks to prevent you from diseases",[task, task2, task3]);

const todoElement = createTodoElement(todo);
container.appendChild(todoElement);
