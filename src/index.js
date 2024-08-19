import {Task} from "./Task";
import { Todo } from "./Todo";

const task = Task("task A", 'aa',2);
const task2 = Task("task b", 'd', 1);
task.setState("finished");

const todo = Todo("a","b",[task, task2]);

let a = todo.getTaskByPriorityNumber(2);
let b = todo.getTaskByPriorityNumber(1);
let c = todo.getTaskByState("finished");

console.log(a.getName());
console.log(b.getName());
console.log(c.getName());