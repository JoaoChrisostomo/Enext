const btnTheme = document.getElementById("btn");
const body = document.querySelector("body");

btnTheme.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});