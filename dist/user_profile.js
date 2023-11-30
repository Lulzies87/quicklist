const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
let avatars = [
    { url: "", id: 1 },
    { url: "", id: 2 },
    { url: "", id: 3 },
    { url: "", id: 4 },
    { url: "", id: 5 },
    { url: "", id: 6 },
    { url: "", id: 7 },
];
let levels = [
    {
        Name: "The New Guy",
        number: 1,
        Description: "Just getting started, still learning the ropes.",
        LevelUnlockScore: -Infinity,
    },
    {
        Name: "The Apprentice",
        number: 2,
        Description: "Making progress, gaining experience.",
        LevelUnlockScore: 10,
    },
    {
        Name: "The Junior Achiever",
        number: 3,
        Description: "Competent and consistently delivering good work.",
        LevelUnlockScore: 25,
    },
    {
        Name: "The Efficient Contributor",
        number: 4,
        Description: "Demonstrating efficiency and reliability.",
        LevelUnlockScore: 50,
    },
    {
        Name: "The Skilled Performer",
        number: 5,
        Description: "Highly skilled, consistently delivering quality work.",
        LevelUnlockScore: 100,
    },
    {
        Name: "The Senior Contributor",
        number: 6,
        Description: " Highly skilled, consistently delivering quality work.",
        LevelUnlockScore: 250,
    },
    {
        Name: "The Expert Achiever",
        number: 7,
        Description: "Expertise in the field, consistently exceeding expectations.",
        LevelUnlockScore: 500,
    },
    {
        Name: "The Masterful Professional",
        number: 8,
        Description: "Mastering the craft, exceptional performance.",
        LevelUnlockScore: 1500,
    },
    {
        Name: "The Leadership Prodigy",
        number: 9,
        Description: "Displaying leadership qualities, making a significant impact.",
        LevelUnlockScore: 3000,
    },
    {
        Name: "The Boss",
        number: 10,
        Description: "A true leader and expert, sets the standard for excellence.",
        LevelUnlockScore: 10000,
    },
];
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
document.getElementById("userPasswordDisplay").innerText = `${currentUser.password}`;
document.getElementById("userLevelDisplay").innerText = `${currentUser.level.number} - ${currentUser.level.Name}\n"${currentUser.level.Description}"`;
document.getElementById("userEXPDisplay").innerText = `${currentUser.xp} / ${getNextLevelUnlockScore(currentUser.level.number)}`;
document.getElementById("aboutMeDisplay").innerText = `${currentUser.about}`;
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
function getNextLevelUnlockScore(currentUserLevelNumber) {
    const nextLevel = levels.find((level) => level.number === currentUserLevelNumber + 1);
    return nextLevel?.LevelUnlockScore;
}
