const navLogo = document.querySelector('.page-header__logo');
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navLogo.classList.remove('page-header__logo--closed');
    navLogo.classList.add('page-header__logo--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navLogo.classList.add('page-header__logo--closed');
    navLogo.classList.remove('page-header__logo--opened');
  }
});
