import { Project, projects, retrieveStoredData } from "./quicklist.model.js"
import { displayProjectDifficulties } from "./quicklist.view.js"

export function loadPage() {
  checkIfLoggedIn()
  activateCreateNewProjectForm()
  retrieveStoredData("projects")
  displayProjectDifficulties()
  logout()
}

function activateCreateNewProjectForm() {
  document.forms
    .namedItem("create-new-project")
    ?.addEventListener("submit", (e) => {
      e.preventDefault()
      const formData = new FormData(e.target as HTMLFormElement)

      const newProject: Project = {
        owner: "Lilach",
        title: parseInput(formData.get("projectTitle"), "Project title"),
        deadline: parseDate(
          formData.get("projectDeadline"),
          "Project deadline",
        ),
        difficulty: parseInput(
          formData.get("projectDifficulty"),
          "Project difficulty",
        ),
        budget: parseNumber(formData.get("projectBudget"), "Project budget"),
        id: crypto.randomUUID(),
        status: "Open",
        details: parseDetails(formData.get("projectDetails"), "Details"),
      }

      projects.push(newProject)
      localStorage.setItem("projects", JSON.stringify(projects))
      toggleConfirmationWindow()
    })
}

function parseInput(input: any, key: string) {
  if (input === null) {
    throw new Error(`${key} can't be null!`)
  } else {
    return input
  }
}

function parseNumber(input: any, key: string) {
  if (isNaN(input)) {
    throw new Error(`${key} must be a number!`)
  }

  if (input < 0) {
    throw new Error(`${key} must be positive!`)
  }

  return Number(input)
}

function parseDate(input: any, key: string) {
  if (input === null) {
    throw new Error(`${key} can't be null!`)
  }

  const inputDate = new Date(input)
  const currentDate = new Date()

  if (inputDate < currentDate) {
    throw new Error(`${key} can't be earlier than now.`)
  }

  return input
}

function parseDetails(input: any, key: string): string {
  if (!input) {
    return ""
  } else {
    return input
  }
}

export function checkIfLoggedIn() {
  const currentUser = sessionStorage.getItem("currentUser")

  if (!currentUser && window.location.pathname !== "/login.html") {
    window.location.href = "login.html"
    throw new Error("User is not logged in.")
  }
}

function logout() {
  document
    .getElementById("logoutButton")
    ?.addEventListener("click", function (event) {
      sessionStorage.clear()
      window.location.href = "login.html"
    })
}

function toggleConfirmationWindow() {
  const confirmationWindow = document.querySelector(
    ".createProject__confirmationWindow",
  ) as HTMLElement
  if (confirmationWindow) {
    confirmationWindow.classList.toggle("--hidden")
  }

  if (!confirmationWindow.classList.contains("--hidden")) {
    activateConfirmationButtons()
  }
}

function activateConfirmationButtons() {
  document
    .getElementById("openAnotherProject")
    ?.addEventListener("click", (e) => {
      document
        .querySelector(".createProject__confirmationWindow")
        ?.classList.add("--hidden")
      location.reload()
    })

  document.getElementById("watchMyProjects")?.addEventListener("click", (e) => {
    document
      .querySelector(".createProject__confirmationWindow")
      ?.classList.add("--hidden")
    location.href = "dashboard.html"
  })
}
