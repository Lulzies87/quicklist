import { loadPage } from "./quicklist.controller.js"
import { loadProjectInfo, appendHTML } from "./quicklist.view.js";

loadPage()

if (window.location.pathname === '/project_details.html') {
    loadProjectInfo("f30f7f36-f9ad-47e4-b43d-c1fad7cb1c84"); // TODO: find a way to get the project id when clicking on a project in the dashboard
}

if (window.location.pathname === '/dashboard.html') {
    appendHTML(); 
}