import { Project, projects } from "./quicklist.model.js";

export function activateCreateNewProjectForm() {
  document.forms.namedItem("create-new-project")?.addEventListener("submit", (e) => {
      e.preventDefault()

      const formData = new FormData(e.target as HTMLFormElement)

      const newProject: Project = {
        owner: "Lilach",
        title: parseInput(formData.get("projectTitle"), "Project title"),
        deadline: parseDate(formData.get("projectDeadline"), "Project deadline"),
        difficulty: parseInput(formData.get("projectDifficulty"), "Project difficulty"),
        budget: parseNumber(formData.get("projectBudget"), "Project budget"),
        id: crypto.randomUUID(),
      }

      projects.push(newProject);
      console.log(projects);
    })
}

function parseInput(input: any, key: string) {
  if (input === null) {
    throw new Error(`${key} can't be null!`);
  } else {
    return input;
  }
}

function parseNumber(input: any, key: string) {
  if (isNaN(input)) {
    throw new Error(`${key} must be a number!`);
  }

  if (input < 0) {
    throw new Error(`${key} must be positive!`);
  }

  return Number(input);
}

function parseDate(input: any, key: string) {
  if (input === null) {
    throw new Error(`${key} can't be null!`);
  }

  const inputDate = new Date(input)
  const currentDate = new Date();

  if (inputDate < currentDate) {
    throw new Error(`${key} can't be earlier than now.`);
  }

  return input;
}
