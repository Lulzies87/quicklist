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
    const Password = getRequiredString(formData, "password");
    const confirmPassword = getRequiredString(formData, "confirmPassword");
    if (Password !== confirmPassword) {
        document.getElementById("messege").innerHTML = "Confirm Password and password do not match ";
    }
    else if (users.some((user) => user.username === username)) {
        throw new Error(`Username ${username} already taken`);
    }
    else if (users.some((user) => user.email === email)) {
        throw new Error(`email ${email} already taken`);
    }
    else {
        users.push({
            fullname: getRequiredString(formData, "fullname"),
            username: getRequiredString(formData, "username"),
            password: getRequiredString(formData, "password"),
            confirmPassword: getRequiredString(formData, "confirmPassword"),
            email: getRequiredString(formData, "email"),
            level: 1,
            xp: 0,
            about: "",
            avatar: "1",
            myProjects: [],
        });
        window.localStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("user", username);
        window.location.href = "login.html";
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
    sessionStorage.setItem("user", user.username);
    window.location.href = "index.html";
}
