function createMainPage(projects) {
    let mainNav = createMainNavElement(projects);

    let mainProject = createProjectElement(projects[0]);

    const mainPage = createDivWithId("mainPage");

    mainPage.appendChild(mainNav);
    mainPage.appendChild(mainProject);

    return mainPage;
}

function createTaskElement(task) {
    const taskContainer = createDivWithClass("taskContainer");

    const taskMainContainer = createDivWithClass("taskMainContainer");

    const taskDescriptionContainer = createDivWithClass("taskDescriptionContainer");

    const taskMainContainerLeftPart = createDivWithClass("taskMainContainerLeftPart");

    const taskMainConainerRightPart = createDivWithClass("taskMainConainerRightPart")


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


function createTodoElement(todo) {
    const todoContainer = createDivWithClass("todoContainer");

    const todoNameContainer = createDivWithClass("todoNameContainer");

    const todoDescriptionContainer = createDivWithClass("todoDescriptionContainer");

    const todoTasksContainer = createDivWithClass("todoTasksContainer");

    const tasks = todo.getTasks();
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        todoTasksContainer.appendChild(taskElement);
    })
    
    const todoDescriptionElement = document.createElement('p');
    todoDescriptionElement.textContent = todo.getDescription();

    const todoNameElement = document.createElement('p');
    todoNameElement.textContent = todo.getName();

    const todoRemoveButton = document.createElement("button");
    todoRemoveButton.textContent = "x";
    todoRemoveButton.setAttribute("type","button");
    todoRemoveButton.setAttribute("class","todoRemoveButton");

    todoDescriptionContainer.appendChild(todoDescriptionElement);
    todoNameContainer.appendChild(todoNameElement);
    todoNameContainer.appendChild(todoRemoveButton);

    todoContainer.appendChild(todoNameContainer);
    todoContainer.appendChild(todoDescriptionContainer);
    todoContainer.appendChild(todoTasksContainer);

    return todoContainer;
}

function createProjectElement(project) {
    const projectContainer = createDivWithClass("projectContainer");

    const projectNameContainer = createDivWithClass("projectNameContainer");

    const projectDescriptionContainer = createDivWithClass("projectDescriptionContainer");

    const projectTodosContainer = createDivWithClass("projectTodosContainer");
    
    const todos = project.getTodos();
    todos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        projectTodosContainer.appendChild(todoElement);
    })
       
    const projectDescriptionElement = document.createElement('p');
    projectDescriptionElement.textContent = project.getDescription();

    const projectNameElement = document.createElement('p');
    projectNameElement.textContent = project.getName();

    projectDescriptionContainer.appendChild(projectDescriptionElement);
    projectNameContainer.appendChild(projectNameElement);

    projectContainer.appendChild(projectNameContainer);
    projectContainer.appendChild(projectDescriptionContainer);
    projectContainer.appendChild(projectTodosContainer);

    return projectContainer;
}


function createProjectsNavContainer(projects) {
    const projectsNavigationContainer = createDivWithId("projectsNavigationContainer");

    const projectsTitleContainer = createDivWithId("projectsTitleContainer");

    const projectElement = document.createElement("p");
    projectElement.textContent = "My Projects";

    projectsTitleContainer.appendChild(projectElement);

    const projectNamesContainer = createDivWithId("projectNamesContainer");

    projects.forEach(project => {
        const projectNameElement = document.createElement('p');
        projectNameElement.textContent = project.getName();
        projectNamesContainer.appendChild(projectNameElement);
    })

    projectsNavigationContainer.appendChild(projectsTitleContainer);
    projectsNavigationContainer.appendChild(projectNamesContainer);

    return projectsNavigationContainer;
}

function createWebsiteTitleContainer() {
    const websiteTitleContainer = createDivWithId("title");
    const websiteTitleElement = document.createElement("p");
    websiteTitleElement.textContent = "Any Task";
    websiteTitleContainer.appendChild(websiteTitleElement);
    return websiteTitleContainer;
}

function createTasksNavContainer() {
    const tasksNavigationContainer = createDivWithId("tasksNavigationContainer");

    const todayTasksContainer = createDivWithId("todayTasksContainer");

    const todayElement = document.createElement("p");
    todayElement.textContent = "Today";

    const weekTasksContainer = createDivWithId("weekTasksContainer");

    const weekElement = document.createElement("p");
    weekElement.textContent = "Week";

    const monthTasksContainer = createDivWithId("monthTasksContainer");

    const monthElement = document.createElement("p");
    monthElement.textContent = "Month";


    const allTimeTasksContainer = createDivWithId("allTimeTasksContainer");

    const allTimeElement = document.createElement("p");
    allTimeElement.textContent = "All";

    todayTasksContainer.appendChild(todayElement);
    weekTasksContainer.appendChild(weekElement);
    monthTasksContainer.appendChild(monthElement);
    allTimeTasksContainer.appendChild(allTimeElement);

    tasksNavigationContainer.appendChild(todayTasksContainer);
    tasksNavigationContainer.appendChild(weekTasksContainer);
    tasksNavigationContainer.appendChild(monthTasksContainer);
    tasksNavigationContainer.appendChild(allTimeTasksContainer);

    return tasksNavigationContainer;
}


function createMainNavElement(projects) {
    const mainNavElement = createDivWithId("mainNav");

    const titleContainer = createWebsiteTitleContainer();

    const tasksNavContainer = createTasksNavContainer();
   
    const projectsNavContainer = createProjectsNavContainer(projects);

    mainNavElement.appendChild(titleContainer);
    mainNavElement.appendChild(tasksNavContainer);
    mainNavElement.appendChild(projectsNavContainer);

    return mainNavElement;
}


function createDivWithClass(className) {
    const div = document.createElement("div");
    div.setAttribute("class",className);
    return div;
}

function createDivWithId(idName) {
    const div = document.createElement("div");
    div.setAttribute("id",idName);
    return div;
}

export {createTaskElement, createTodoElement, createProjectElement, createMainPage};