var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.header__wrapper');

navMain.classList.remove('main-nav-nojs');

navToggle.addEventListener('click', function() {

  if (navMain.classList.contains('main-nav-closed')) {
    navMain.classList.remove('main-nav-closed');
    navMain.classList.add('main-nav-opened');
    pageHeader.style.backgroundColor = '#283645';
  }
    else {
      navMain.classList.add('main-nav-closed');
      navMain.classList.remove('main-nav-opened');
      pageHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    }
  }
);
