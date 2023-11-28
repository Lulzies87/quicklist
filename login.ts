// const firstName = "shai"
// const lastName = "benari"
// window.sessionStorage.setItem("first name" ,firstName);
// window.localStorage.setItem("last name" , lastName);

type UserData = {
    username: string;
    nickname: string;
    password: string;
    confirmPassword: string;
    email: string;
};
type UserDataArry = UserData[];
const UsersData: UserDataArry =[];

const addUserForm = document.querySelector("form[name='sing-up']") as HTMLFormElement | null;
if (!addUserForm) {
    console.error("Couldn't find add user form.");
} 
else {
    addUserForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);


    UsersData.push({
      username: getRequiredString(formData, "name"),
      nickname: getRequiredString(formData, "nickName"),
      password: getRequiredString(formData, "password"),
      confirmPassword: getRequiredString(formData, "confirmPassword"),
      email: getRequiredString(formData, "e-mail"),

     
    });
      console.log(UsersData);
    });
}

function getString(formData: FormData, key: string) {
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
function getRequiredString(formData: FormData, key: string) {
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

function getLoginInfo(){
    let username = document.getElementById("login-name");
    let password = document.getElementById("login-password");
   
    console.log(username);
}