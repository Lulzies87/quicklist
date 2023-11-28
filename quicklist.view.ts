import { difficulties } from "./quicklist.model.js";

export function displayProjectDifficulties() {
    const container = document.getElementById("projectDifficulty") as HTMLSelectElement;
    container.innerHTML = `${difficulties.map(toOption).join("\n")}`;
}

function toOption(difficulty: string) {
    return `<option value=${difficulty}>${difficulty}</option>`
}