export const difficulties = ["Easy", "Medium", "Hard", "Expert"] as const;
const status = ["Open", "In Progress", "Done"] as const;

type Difficulty = (typeof difficulties)[number];
type Status = (typeof status)[number];

export type Project = {
  owner: string
  title: string
  deadline: Date
  difficulty: Difficulty
  budget: number
  id: string
  status: Status
}

type Projects = Project[];

export let projects: Projects = [];

export function retrieveStoredData(name: string) {
    const retrievedData = localStorage.getItem(name);
    if (retrievedData) {
        projects = JSON.parse(retrievedData);
    }
}