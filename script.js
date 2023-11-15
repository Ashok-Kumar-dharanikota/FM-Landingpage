document.addEventListener('DOMContentLoaded', function() {
    const headerMenu = document.querySelector('.header-menu');
    const nav = document.querySelector('nav');
  
    nav.style.display = 'flex';

    headerMenu.addEventListener('click', function() {
      if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'flex';
      } else {
        nav.style.display = 'none';
      }
    });
  });
  