import { difficulties, projects } from "./quicklist.model.js";

export function displayProjectDifficulties() {
    const container = document.getElementById("projectDifficulty") as HTMLSelectElement;
if (container) {
    container.innerHTML = `${difficulties.map(toOption).join("\n")}`;
}
}

function toOption(difficulty: string) {
    return `<option value=${difficulty}>${difficulty}</option>`
}

function getProjectInfo(id: string) {
    const chosenProject = projects.find(project => project.id === id);

    if (!chosenProject) {
        throw new Error(`Project wasn't found!`);
    }

    return chosenProject;
}

export function loadProjectInfo(id: string) {
    const chosenProject = getProjectInfo(id);

    document.getElementById("projectInfoOwner")!.innerText = `${chosenProject.owner}`
    document.getElementById("projectInfoDeadline")!.innerText = `${parseDate(chosenProject.deadline)}`
    document.getElementById("projectInfoDifficulty")!.innerText = `${chosenProject.difficulty}`
    document.getElementById("projectInfoBudget")!.innerText = `${chosenProject.budget}`
    document.getElementById("projectInfoStatus")!.innerText = `${chosenProject.status}`
    document.getElementById("projectInfoDetails")!.innerText = `${chosenProject.details}`


}

function parseDate(date: Date) {
    const dateString = date.toString();
    return dateString.replace('T', ' ');
}