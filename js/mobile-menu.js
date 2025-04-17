const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu__item');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

// Открытие и закрытие кнопками
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// Закрытие по клику на пункт меню
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
  });
});
