type Level = {
  Name: string
  LevelNumber: number
  Description: string
  LevelUnlockScore: number
}

let levels: Level[] = [
  {
    Name: "The New Guy",
    LevelNumber: 1,
    Description: "Just getting started, still learning the ropes.",
    LevelUnlockScore: -Infinity,
  },
  {
    Name: "The Apprentice",
    LevelNumber: 2,
    Description: "Making progress, gaining experience.",
    LevelUnlockScore: 10,
  },
  {
    Name: "The Junior Achiever",
    LevelNumber: 3,
    Description: "Competent and consistently delivering good work.",
    LevelUnlockScore: 25,
  },
  {
    Name: "The Efficient Contributor",
    LevelNumber: 4,
    Description: "Demonstrating efficiency and reliability.",
    LevelUnlockScore: 50,
  },
  {
    Name: "The Skilled Performer",
    LevelNumber: 5,
    Description: "Highly skilled, consistently delivering quality work.",
    LevelUnlockScore: 100,
  },
  {
    Name: "The Senior Contributor",
    LevelNumber: 6,
    Description: " Highly skilled, consistently delivering quality work.",
    LevelUnlockScore: 250,
  },
  {
    Name: "The Expert Achiever",
    LevelNumber: 7,
    Description: "Expertise in the field, consistently exceeding expectations.",
    LevelUnlockScore: 500,
  },
  {
    Name: "The Masterful Professional",
    LevelNumber: 8,
    Description: "Mastering the craft, exceptional performance.",
    LevelUnlockScore: 1500,
  },
  {
    Name: "The Leadership Prodigy",
    LevelNumber: 9,
    Description:
      "Displaying leadership qualities, making a significant impact.",
    LevelUnlockScore: 3000,
  },
  {
    Name: "The Boss",
    LevelNumber: 10,
    Description: "A true leader and expert, sets the standard for excellence.",
    LevelUnlockScore: 10000,
  },
]

type UserData = {
  fullname: string
  username: string
  password: string
  email: string
  level: Level
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

loginForm?.addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(e.target as HTMLFormElement)

  const username = getString(formData, "login-username")
  const password = getString(formData, "login-password")

  if (username && password) {
    try {
      login(username, password)
    } catch (error) {
      console.error("no username or password")
    }
  }
})

const addUserForm = document.querySelector(
  "form[name='sign-up']",
) as HTMLFormElement | null
addUserForm?.addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(e.target as HTMLFormElement)
  const username = getRequiredString(formData, "username")
  const email = getRequiredString(formData, "email")

  if (users.some((user) => user.username === username)) {
    throw new Error(`Username ${username} already taken`)
  } else if (users.some((user) => user.email === email)) {
    throw new Error(`email ${email} already taken`)
  } else {
    const newUser: UserData = {
      fullname: getRequiredString(formData, "fullname"),
      username: getRequiredString(formData, "username"),
      password: getRequiredString(formData, "password"),
      email: getRequiredString(formData, "email"),
      level: {
        Name: "The New Guy",
        LevelNumber: 1,
        Description: "Just getting started, still learning the ropes.",
        LevelUnlockScore: -Infinity,
      },
      xp: 0,
      about: "",
      avatar: "1",
      myProjects: [],
    }

    users.push(newUser)

    window.localStorage.setItem("users", JSON.stringify(users))
    sessionStorage.setItem("currentUser", JSON.stringify(newUser))
    window.location.href = "dashboard.html"
  }
})

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

  sessionStorage.setItem("currentUser", JSON.stringify(user))
  window.location.href = "dashboard.html"
}
