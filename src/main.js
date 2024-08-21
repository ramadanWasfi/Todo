import { createProjectElement } from "./Project";

export function createMainPage(projects) {
    let mainNav = createMainNavElement(projects);

    let mainProject = createProjectElement(projects[0]);

    const mainPage = document.createElement("main");
    mainPage.setAttribute("id","mainPage");

    mainPage.appendChild(mainNav);
    mainPage.appendChild(mainProject);

    return mainPage;
}

function createMainNavElement(projects) {
    const mainNavElement = document.createElement("div");
    mainNavElement.setAttribute("id","mainNav");

    const titleContainer = createWebsiteTitleContainer();

    const tasksNavContainer = createTasksNavContainer();
   
    const projectsNavContainer = createProjectsNavContainer(projects);

    mainNavElement.appendChild(titleContainer);
    mainNavElement.appendChild(tasksNavContainer);
    mainNavElement.appendChild(projectsNavContainer);

    return mainNavElement;
}

function createWebsiteTitleContainer() {
    const websiteTitleContainer = document.createElement("div");
    websiteTitleContainer.setAttribute("id","title");
    const websiteTitleElement = document.createElement("p");
    websiteTitleElement.textContent = "Any Task";
    websiteTitleContainer.appendChild(websiteTitleElement);
    return websiteTitleContainer;
}

function createTasksNavContainer() {
    const tasksNavigationContainer = document.createElement("div");
    tasksNavigationContainer.setAttribute("id","tasksNavigationContainer");

    const todayTasksContainer = document.createElement("div");
    todayTasksContainer.setAttribute("id","todayTasksContainer");

    const todayElement = document.createElement("p");
    todayElement.textContent = "Today";

    const weekTasksContainer = document.createElement("div");
    weekTasksContainer.setAttribute("id","weekTasksContainer");

    const weekElement = document.createElement("p");
    weekElement.textContent = "Week";

    const monthTasksContainer = document.createElement("div");
    monthTasksContainer.setAttribute("id","monthTasksContainer");

    const monthElement = document.createElement("p");
    monthElement.textContent = "Month";


    const allTimeTasksContainer = document.createElement("div");
    allTimeTasksContainer.setAttribute("id","allTimeTasksContainer");

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

function createProjectsNavContainer(projects) {
    const projectsNavigationContainer = document.createElement("div");
    projectsNavigationContainer.setAttribute("id","projectsNavigationContainer");

    const projectsTitleContainer = document.createElement("div");
    projectsTitleContainer.setAttribute("id","projectsTitleContainer");

    const projectElement = document.createElement("p");
    projectElement.textContent = "My Projects";

    projectsTitleContainer.appendChild(projectElement);

    const projectNamesContainer = document.createElement("div");
    projectNamesContainer.setAttribute("id","projectNamesContainer");

    projects.forEach(project => {
        const projectNameElement = document.createElement('p');
        projectNameElement.textContent = project.getName();
        projectNamesContainer.appendChild(projectNameElement);
    })

    projectsNavigationContainer.appendChild(projectsTitleContainer);
    projectsNavigationContainer.appendChild(projectNamesContainer);


    return projectsNavigationContainer;

}