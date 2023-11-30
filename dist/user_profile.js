const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
const retrieveUsers = localStorage.getItem("users");
if (retrieveUsers) {
    users = JSON.parse(retrieveUsers);
}
let avatars = [
    "assets/avatar-1.png",
    "assets/avatar-2.png",
    "assets/avatar-3.png",
    "assets/avatar-4.png",
    "assets/avatar-5.png",
    "assets/avatar-6.png",
    "assets/avatar-7.png",
    "assets/avatar-8.png",
    "assets/avatar-9.png",
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
generateAvatarElements();
const userMenuAvatar = document.getElementById("userMenuAvatar");
if (userMenuAvatar) {
    userMenuAvatar.src = currentUser.avatar;
}
const userAvatar = document
    .getElementById("userAvatar")
    ?.querySelector("img");
if (userAvatar) {
    userAvatar.src = currentUser.avatar;
}
updateUserMenu();
function updateUserMenu() {
    const userMenuName = document.getElementById("user-menu-name");
    const userMenuLvl = document.getElementById("user-menu-lvl");
    const userMenuXp = document.getElementById("user-menu-xp");
    userMenuName.innerText = currentUser.username;
    userMenuLvl.innerText = `lvl ${currentUser.level.number}\n${currentUser.level.Name}`;
    userMenuXp.innerText = `XP ${currentUser.xp} / ${getNextLevelUnlockScore(currentUser.level.number)}`;
}
document
    .getElementById("logoutButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
    sessionStorage.clear();
    window.location.href = "login.html";
});
document
    .getElementById("changeAvatarButton")
    ?.addEventListener("click", function (event) {
    event.preventDefault();
    toggleVisibility("#avatarsCollection");
    toggleVisibility("#changeAvatarButton");
    toggleVisibility("#cancleButton");
    toggleVisibility("#saveButton");
});
// document
//   .getElementById("editButton")
//   ?.addEventListener("click", function (event) {
//     event.preventDefault()
//     toggleVisibility(".profile-details__form__input input")
//     toggleVisibility(".--toggle-hide")
//   })
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
function generateAvatarElements() {
    const avatarsCollection = document.getElementById("avatarsCollection");
    avatars.forEach((avatar) => {
        const imgElement = document.createElement("img");
        imgElement.className = "avatar__picture";
        imgElement.src = avatar;
        imgElement.alt = `Choice for ${avatar}`;
        imgElement.addEventListener("click", () => handleAvatarClick(avatar));
        avatarsCollection?.appendChild(imgElement);
    });
}
function handleAvatarClick(avatarUrl) {
    const userAvatar = document.getElementById("userAvatar")?.querySelector("img");
    if (userAvatar) {
        userAvatar.src = avatarUrl;
        currentUser.avatar = avatarUrl;
        const currentUserIndex = users.findIndex((user) => user.username === currentUser.username);
        users[currentUserIndex].avatar = avatarUrl;
        localStorage.setItem("users", JSON.stringify(users));
        saveUserData();
        location.reload();
        userMenuAvatar.src = avatarUrl;
    }
}
function saveUserData() {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
}
