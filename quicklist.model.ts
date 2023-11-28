const difficulties = ["Easy", "Medium", "Hard", "Expert"] as const;

type Difficulty = (typeof difficulties)[number];

export type Project = {
  owner: string
  title: string
  deadline: Date
  difficulty: Difficulty
  budget: number
  id: string
}

type Projects = Project[];

export let projects: Projects = [];

export function retrieveStoredData(name: string) {
    const retrievedData = localStorage.getItem(name);
    if (retrievedData) {
        projects = JSON.parse(retrievedData);
    }
}