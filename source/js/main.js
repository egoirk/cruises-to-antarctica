const bodyOverflow = document.querySelector('.page-body');
const navLogo = document.querySelector('.page-header__logo');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    bodyOverflow.classList.remove('page-body__visible');
    bodyOverflow.classList.add('page-body__hidden');
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navLogo.classList.remove('page-header__logo--closed');
    navLogo.classList.add('page-header__logo--opened');
  } else {
    bodyOverflow.classList.remove('page-body__hidden');
    bodyOverflow.classList.add('page-body_visible');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navLogo.classList.add('page-header__logo--closed');
    navLogo.classList.remove('page-header__logo--opened');
  }
});
