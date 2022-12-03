const menuOverlay = document.querySelector(".c-menu-overlay");
const closeMenuBtn = document.querySelector(".c-menu-btn__button");
const openMenuBtn = document.querySelector(".c-nav__button");

openMenuBtn.addEventListener("click", e => {
  menuOverlay.classList.remove("is-closed");
});

closeMenuBtn.addEventListener("click", e => {
  menuOverlay.classList.add("is-closed");
});
