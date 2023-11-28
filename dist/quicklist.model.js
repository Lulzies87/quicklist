export const difficulties = ["Easy", "Medium", "Hard", "Expert"];
export let projects = [];
export function retrieveStoredData(name) {
    const retrievedData = localStorage.getItem(name);
    if (retrievedData) {
        projects = JSON.parse(retrievedData);
    }
}
