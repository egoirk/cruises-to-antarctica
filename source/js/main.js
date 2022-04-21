const bodyOverflow = document.querySelector('.page-body');
const navLogo = document.querySelector('.page-header__logo');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const menuItems = document.querySelectorAll('.main-nav__list a');

navMain.classList.remove('main-nav--nojs');

function openMenu() {
  bodyOverflow.classList.remove('page-body__visible');
  bodyOverflow.classList.add('page-body__hidden');
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  navLogo.classList.remove('page-header__logo--closed');
  navLogo.classList.add('page-header__logo--opened');
}

function closeMenu() {
  bodyOverflow.classList.remove('page-body__hidden');
  bodyOverflow.classList.add('page-body_visible');
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  navLogo.classList.add('page-header__logo--closed');
  navLogo.classList.remove('page-header__logo--opened');
}

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

menuItems.forEach((item) => item.addEventListener('click', function () {
  closeMenu();
}));
