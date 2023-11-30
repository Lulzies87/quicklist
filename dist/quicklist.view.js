import { difficulties, projects } from "./quicklist.model.js";
export function displayProjectDifficulties() {
    const container = document.getElementById("projectDifficulty");
    if (container) {
        container.innerHTML = `${difficulties.map(toOption).join("\n")}`;
    }
}
function toOption(difficulty) {
    return `<option value=${difficulty}>${difficulty}</option>`;
}
function getProjectInfo(id) {
    const chosenProject = projects.find((project) => project.id === id);
    if (!chosenProject) {
        throw new Error(`Project wasn't found!`);
    }
    return chosenProject;
}
export function loadProjectInfo(id) {
    const chosenProject = getProjectInfo(id);
    document.getElementById("projectInfoOwner").innerText = `${chosenProject.owner}`;
    document.getElementById("projectInfoDeadline").innerText = `${parseDate(chosenProject.deadline)}`;
    document.getElementById("projectInfoDifficulty").innerText = `${chosenProject.difficulty}`;
    document.getElementById("projectInfoBudget").innerText = `${chosenProject.budget}`;
    document.getElementById("projectInfoStatus").innerText = `${chosenProject.status}`;
    document.getElementById("projectInfoDetails").innerText = `${chosenProject.details}`;
}
function parseDate(date) {
    const dateString = date.toString();
    return dateString.replace("T", "  ");
}
export function appendHTML(currentUser) {
    const yourProjectsContainer = document.querySelector(".your-projects__container__list");
    const availableProjectsContainer = document.querySelector(".available-projects__container__list");
    if (yourProjectsContainer && availableProjectsContainer) {
        projects.forEach((project) => {
            const projectHTML = generateProjectHTML(project, currentUser);
            if (project.owner !== currentUser.username && project.status === "Open") {
                availableProjectsContainer.innerHTML += projectHTML;
            }
            else {
                yourProjectsContainer.innerHTML += projectHTML;
            }
        });
    }
}
function generateProjectHTML(project, currentUser) {
    return `
      <li class="your-projects__container__list-item">
        <a id="${project.id}" href="project_details.html#${project.id}" class="__project-title">${project.title}</a>
        <p class="__project-owner">${project.owner}</p>
        <p class="__project-deadline">${parseDate(project.deadline)}</p>
      </li>
    `;
}
