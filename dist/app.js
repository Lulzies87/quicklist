import { loadPage } from "./quicklist.controller.js";
import { loadProjectInfo, appendHTML } from "./quicklist.view.js";
loadPage();
if (window.location.pathname === '/project_details.html') {
    loadProjectInfo(window.location.hash.substring(1));
}
if (window.location.pathname === '/dashboard.html') {
    appendHTML();
}
