import { difficulties } from "./quicklist.model.js";
export function displayProjectDifficulties() {
    const container = document.getElementById("projectDifficulty");
    container.innerHTML = `${difficulties.map(toOption).join("\n")}`;
}
function toOption(difficulty) {
    return `<option value=${difficulty}>${difficulty}</option>`;
}
