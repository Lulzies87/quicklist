import { difficulties } from "./quicklist.model.js";
export function displayProjectDifficulties() {
    const container = document.getElementById("projectDifficulty");
    if (container) {
        container.innerHTML = `${difficulties.map(toOption).join("\n")}`;
    }
}
function toOption(difficulty) {
    return `<option value=${difficulty}>${difficulty}</option>`;
}
