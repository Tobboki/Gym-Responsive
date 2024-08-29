const navToggleButton = document.getElementById('nav-toggle-button');
const navList = document.querySelector('.nav-list');
const toggleIcon = document.querySelector('.nav-toggle-icon');
const closeIcon = document.querySelector('.nav-close-icon');

function toggleMenu() { 
  const isVisible = navList.hasAttribute('data-menu-visible');
  navToggleButton.setAttribute('aria-expanded', !isVisible);

  navList.toggleAttribute('data-menu-visible');

  toggleIcon.classList.toggle('show');
  closeIcon.classList.toggle('show');
};

navToggleButton.addEventListener('click', toggleMenu);


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => link.addEventListener('click', () => {
  toggleMenu();
}));

/* Scroll up */
const scrollUp = () => {
  const scrollUpArrow = document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUpArrow.classList.add('show-scroll-up')
                        : scrollUpArrow.classList.remove('show-scroll-up');
};
window.addEventListener('scroll', scrollUp);