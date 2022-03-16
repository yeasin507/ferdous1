var hamburger = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".hamburger_menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("header_menu");
}
