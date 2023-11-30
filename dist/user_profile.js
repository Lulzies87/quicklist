const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
checkIfLoggedIn();
document
    .getElementById("logoutButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.clear();
    window.location.href = "login.html";
});
document
    .getElementById("editButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
    toggleVisibility(".profile-details__form__input input");
    toggleVisibility(".--toggle-hide");
});
document
    .getElementById("passwordvisibilityButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
});
document
    .getElementById("cancleButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.reload();
});
document
    .getElementById("saveButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
});
document.getElementById("userNameDisplay").innerText = `${currentUser.fullname}`;
document.getElementById("userNicknameDisplay").innerText = `${currentUser.username}`;
function showVisibility(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.remove("--hidden");
    });
}
function hideVisibility(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.add("--hidden");
    });
}
function toggleVisibility(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle("--hidden");
    });
}
//
function checkIfLoggedIn() {
    if (!currentUser && window.location.pathname !== "/login.html") {
        window.location.href = "login.html";
        throw new Error("User is not logged in.");
    }
}
