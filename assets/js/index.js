const iconMenuOpen = document.querySelector(".hamburguer-menu");
const iconMenuClose = document.querySelector(".hamburguer-menu-close");
const navItens = document.querySelector("#navItens");

iconMenuOpen.addEventListener('click', () => navItens.style.display = 'block');
iconMenuClose.addEventListener('click', () => navItens.style.display = 'none');