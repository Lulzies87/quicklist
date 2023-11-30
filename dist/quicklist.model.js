export const difficulties = ["Easy", "Medium", "Hard", "Expert"];
const status = ["Open", "In Progress", "Done"];
export let projects = [];
export function retrieveStoredData(name) {
    const retrievedData = localStorage.getItem(name);
    if (retrievedData) {
        projects = JSON.parse(retrievedData);
    }
}
