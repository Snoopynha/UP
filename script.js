const menu = document.querySelector(".menu");
const navbar = document.querySelector(".nav-bar");

menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});