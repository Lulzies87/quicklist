type UserData = {
  fullname: string
  username: string
  password: string
  email: string
  level: number
  xp: number
  about?: string
  avatar: string
  myProjects: []
}
type UserDataArry = UserData[]
let users: UserDataArry = []

const retrieveUsers = localStorage.getItem("users")
if (retrieveUsers) {
  users = JSON.parse(retrieveUsers)
}

const loginForm = document.querySelector(
  "form[name='login']",
) as HTMLFormElement | null
if (!loginForm) {
  console.error("Couldn't find login form.")
} else {
  loginForm.addEventListener("submit", function (e) {
    const formData = new FormData(e.target as HTMLFormElement)

    const username = getString(formData, "username")
    const password = getString(formData, "password")
    console.log(username)
    console.log(password)

    if (username && password) {
      try {
        login(username, password)
      } catch (error) {
        console.error("no username or password")
      }
    }
  })
}

const addUserForm = document.querySelector(
  "form[name='sign-up']",
) as HTMLFormElement | null
if (!addUserForm) {
  console.error("Couldn't find add user form.")
} else {
  addUserForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const username = getRequiredString(formData, "username")
    const email = getRequiredString(formData, "email")

    if (users.some((user) => user.username === username)) {
      throw new Error(`Username ${username} already taken`)
    } else if (users.some((user) => user.email === email)) {
      throw new Error(`email ${email} already taken`)
    } else {
      users.push({
        fullname: getRequiredString(formData, "fullname"),
        username: getRequiredString(formData, "username"),
        password: getRequiredString(formData, "password"),
        email: getRequiredString(formData, "e-mail"),
        level: 1,
        xp: 0,
        about: "",
        avatar: "1",
        myProjects: [],
      })

      window.localStorage.setItem("users", JSON.stringify(users))
      window.location.href = "index.html"
      console.log(users)
    }
  })
}

function getString(formData: FormData, key: string) {
  const value = formData.get(key)

  if (value == null) {
    throw new Error(`Field ${key} doesn't exist!`)
  }

  if (typeof value !== "string") {
    throw new Error(`Value of field ${key} is not a string!`)
  }

  if (!value) {
    return undefined
  }
  console.log(value)
  return value
}
function getRequiredString(formData: FormData, key: string) {
  const value = getString(formData, key)

  if (!value) {
    throw new Error(`Value for ${key} is required!`)
  }

  return value
}
function login(username: string, password: string) {
  const user = users.find(
    (user) => user.username === username && user.password === password,
  )

  if (!user) {
    throw new Error("Invalid username or password.")
  }

  sessionStorage.setItem("user", user.username)
  window.location.href = "index.html"
}

// document.addEventListener("`DOMContentLoaded" ,() => {
//   const signupForm = document.querySelector("#formSignin");
//   const loginForm = document.querySelector("#formLogin");

//   document.querySelector("#linkSignup")?.addEventListener("click", (e) => {
//     e.preventDefault();
//     loginForm?.classList.add("form__hidden");
//     signupForm?.classList.remove("form__hidden");
//   });

//   document.querySelector("#linkLogin")?.addEventListener("click", (e) => {
//     e.preventDefault();
//     loginForm?.classList.remove("form__hidden");
//     signupForm?.classList.add("form__hidden");
//   })

// });
