document.getElementById("editButton")?.addEventListener("click", function (event) {
    event.preventDefault();
    toggleVisibility(".profile-details__form__input input");
    toggleVisibility(".profile-details__form__input p");
    toggleVisibility("#avatarsCollection");
});
function toggleVisibility(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(function (element) {
        element.classList.toggle("--hidden");
    });
}
