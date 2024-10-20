const hamburgerMenu = document.querySelector("#menu-icon");
const navLinks = document.querySelector("nav .links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburgerMenu.src = navLinks.classList.contains("active")
    ? "img/icons/x-solid.svg"
    : "img/icons/bars-solid 1.svg";
});