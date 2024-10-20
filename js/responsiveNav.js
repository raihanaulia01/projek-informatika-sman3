const hamburgerMenu = document.querySelector("#menu-icon");
const navLinks = document.querySelector("nav .links");

hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});