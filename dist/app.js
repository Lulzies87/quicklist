import { loadPage, checkIfLoggedIn } from "./quicklist.controller.js";
// import { users } from "./login.js";
// const retrieveUsers = JSON.parse(localStorage.getItem("users")!);
// users = sessionStorage.getItem(retrieveUsers);
document
    .getElementById("logoutButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.clear();
    window.location.href = "login.html";
});
checkIfLoggedIn();
loadPage();
