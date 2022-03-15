var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
}

