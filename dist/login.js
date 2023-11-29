// const firstName = "shai"
// const lastName = "benari"
// window.sessionStorage.setItem("first name" ,firstName);
// window.localStorage.setItem("last name" , lastName);
let users = [];
const retrieveUsers = localStorage.getItem("users");
if (retrieveUsers) {
    users = JSON.parse(retrieveUsers);
}
const loginForm = document.querySelector("form[name='login']");
if (!loginForm) {
    console.error("Couldn't find login form.");
}
else {
    loginForm.addEventListener("submit", function (e) {
        const formData = new FormData(e.target);
        const username = getString(formData, "username");
        const password = getString(formData, "password");
        if (username && password) {
            try {
                login(username, password);
            }
            catch (error) {
                console.error("no username or password");
            }
        }
    });
}
const addUserForm = document.querySelector("form[name='sign-up']");
if (!addUserForm) {
    console.error("Couldn't find add user form.");
}
else {
    addUserForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        users.push({
            username: getRequiredString(formData, "name"),
            nickname: getRequiredString(formData, "nickName"),
            password: getRequiredString(formData, "password"),
            email: getRequiredString(formData, "e-mail"),
            level: 1,
            xp: 0,
            about: "",
            avatar: "1",
            myProjects: [],
        });
        window.localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "index.html";
    });
}
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
// // function parseGender(value: string): gender {
// //     if (value !== "male" && value !== "fmale" ) {
// //         throw new Error(`Invalid gender type: ${value}`);
// //     }
// //     return value;
// // }
// function parseAge(value: string): age {
//     if (value !== "0" && value !== "1" && value !== "2" && value !== "3"  && value !== "4") {
//         throw new Error(`Invalid age type: ${value}`);
//     }
//     return value;
// }
function login(username, password) {
    const user = users.find((user) => user.username === username && user.password === password);
    if (!user) {
        throw new Error("Invalid username or password.");
    }
    sessionStorage.setItem("user", user.username);
    window.location.href = "index.html";
}
