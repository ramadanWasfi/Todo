import {Task, createTaskElement} from "./Task";
import { Todo, createTodoElement } from "./Todo";
import { Project, createProjectElement} from "./Project";
import {createMainPage} from "./main";

import "./style.css";

const task = Task("task A", 'aa',2);
const task2 = Task("task b", 'd', 1);
const task3 = Task("task basda", 'asdasdasad', 4);

const todo = Todo("health todo","some tasks to prevent you from diseases",[task, task2, task3]);
const todo2 = Todo("wealth todo","tasks to increase your money freedom",[task, task2, task3]);
const todo3 = Todo("mental health todo","train your brain to be calm in every situation",[task, task2, task3]);

const project = Project("Human Genome Project", "Hack Human DNA To alter human behavior",[todo, todo2, todo3])
const project2 = Project("Good Project", "Hack Human DNA To alter human behavior",[todo, todo2, todo3])
const project3 = Project("Hanna Project", "Hack Human DNA To alter human behavior",[todo, todo2, todo3])

const projects = [project, project2, project3];

const mainPage = createMainPage(projects);

let container = document.querySelector(".container");
container.appendChild(mainPage);

