import { loadPage, checkIfLoggedIn } from "./quicklist.controller.js"

// const currentUser = sessionStorage.getItem("user")

document
  .getElementById("logoutButton")
  ?.addEventListener("click", function (event) {
    event.preventDefault()
    sessionStorage.clear()
    window.location.href = "login.html"
  })

checkIfLoggedIn()
loadPage()
