const menu = document.querySelector(".nav__menu--ul");
const openMenuBtn = document.querySelector(".open_nav__menu");
const closeMenuBtn = document.querySelector(".close_nav__menu");

function toggleMenu(){
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);