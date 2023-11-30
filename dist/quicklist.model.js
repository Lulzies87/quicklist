export const difficulties = ["Easy", "Medium", "Hard", "Expert"];
const status = ["Open", "In Progress", "Done"];
export let projects = [];
export function retrieveStoredData(name) {
    const retrievedData = localStorage.getItem(name);
    if (retrievedData) {
        projects = JSON.parse(retrievedData);
    }
}
export let levels = [
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
