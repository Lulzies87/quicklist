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
let users = [];
const retrieveUsers = localStorage.getItem("users");
if (retrieveUsers) {
    users = JSON.parse(retrieveUsers);
}
const loginForm = document.querySelector("form[name='login']");
loginForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = getString(formData, "login-username");
    const password = getString(formData, "login-password");
    if (username && password) {
        try {
            login(username, password);
        }
        catch (error) {
            console.error("no username or password");
        }
    }
});
const addUserForm = document.querySelector("form[name='sign-up']");
addUserForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = getRequiredString(formData, "username");
    const email = getRequiredString(formData, "email");
    if (users.some((user) => user.username === username)) {
        throw new Error(`Username ${username} already taken`);
    }
    else if (users.some((user) => user.email === email)) {
        throw new Error(`email ${email} already taken`);
    }
    else {
        const newUser = {
            fullname: getRequiredString(formData, "fullname"),
            username: getRequiredString(formData, "username"),
            password: getRequiredString(formData, "password"),
            email: getRequiredString(formData, "email"),
            level: {
                Name: "The New Guy",
                number: 1,
                Description: "Just getting started, still learning the ropes.",
                LevelUnlockScore: -Infinity,
            },
            xp: 0,
            about: "",
            avatar: "1",
            myProjects: [],
        };
        users.push(newUser);
        window.localStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("currentUser", JSON.stringify(newUser));
        window.location.href = "dashboard.html";
    }
});
function getString(formData, key) {
    const value = formData.get(key);
    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }
    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }
    if (!value) {
        return undefined;
    }
    return value;
}
function getRequiredString(formData, key) {
    const value = getString(formData, key);
    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }
    return value;
}
function login(username, password) {
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
        throw new Error("Invalid username or password.");
    }
    sessionStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
}
