import { loadPage } from "./quicklist.controller.js"
import { displayProjectInfo } from "./quicklist.view.js";

loadPage()

if (window.location.pathname === '/project_details.html') {
    displayProjectInfo("93bdce14-34e8-4ea0-952d-f78b268d7fcb"); // TODO: find a way to get the project id when clicking on a project in the dashboard
}