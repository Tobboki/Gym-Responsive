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

/* Scroll Section active link */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach( currentSection => {
    const sectionHeight = currentSection.offsetHeight;
    const sectionTop = currentSection.offsetTop - 360 ;
    const sectionId = currentSection.getAttribute('id');
    const sectionClass = document.querySelector('.nav-list a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-nav-link');
    } else {
      sectionClass.classList.remove('active-nav-link');
    }

  });
}

window.addEventListener('scroll', scrollActive);

/* BMI Calculator Section */
const calculatorForm  = document.getElementById('calculator-form');
const heightInput  = document.getElementById('calculator-height');
const weightInput  = document.getElementById('calculator-weight');
const resultMassage = document.getElementById('calculator-result');

const calculateBMI = (e) => {
  e.preventDefault();

  if (heightInput.value === '' || weightInput.value === '' ) {

    resultMassage.textContent = 'Fill in the Height and Weight';

    resultMassage.style.color = 'red';

    setTimeout( () => {
      resultMassage.textContent = '';
    }, 3000);

  } else {
    const height = heightInput.value / 100;
    const weight = weightInput.value;

    const bmi = Math.round( weight / ( height * height ) );
    resultMassage.style.color = 'hsl(79, 72%, 55%)';

    if (bmi < 18.5) {
      resultMassage.textContent = `Your BMI is ${bmi} and you are skinny.`;
    } else if (bmi <= 25) {
      resultMassage.textContent = `Your BMI is ${bmi} and you are healthy.`;
    } else {
      resultMassage.textContent = `Your BMI is ${bmi} and you are overweight.`;
    }
  }
}

calculatorForm.addEventListener('submit', calculateBMI);

/* Newsletter section */
const newsletterForm = document.getElementById('newsletter-form');
const newsletterInput = document.getElementById('newsletter-input');
const newsletterButton = document.getElementById('newsletter-button');
const newsletterMassage = document.getElementById('newsletter-massage');

const sendEmail = (e) => {
  e.preventDefault();

  if (newsletterInput.value === '') {
    newsletterMassage.style.color = 'red';

    newsletterMassage.textContent = 'You must enter your email.';

    setTimeout(() => {
      newsletterMassage.textContent = '';
    },3000);
    
  } else {
    emailjs.sendForm('service_6dsy6rb', 'template_w8xkpbm', '#newsletter-form', 'wfR7X_0EcD1DdvfXJ').then( () => {
      newsletterMassage.style.color = 'hsl(79, 72%, 55%)';

      newsletterMassage.textContent = 'You subscribed successfully.';

      setTimeout(() => {
        newsletterMassage.textContent = '';
      },3000);
    });
  }
  
}

newsletterForm.addEventListener('submit', sendEmail);

/* Scroll up */
const scrollUp = () => {
  const scrollUpArrow = document.getElementById('scroll-up');
  window.scrollY >= 350 ? scrollUpArrow.classList.add('show-scroll-up')
                        : scrollUpArrow.classList.remove('show-scroll-up');
};

window.addEventListener('scroll', scrollUp);

/* Scroll Reveal Animations */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400
});

/* home section */
sr.reveal(`.home-data`);
sr.reveal(`.home-img`, {
  origin: 'bottom',
  delay: 700
});
sr.reveal(`.company-logo`, {
  interval: 100
});

/* Programs Section */
sr.reveal(`.program-card`, {
  interval: 100
});

/* Choose Us Section */
sr.reveal(`.choose-content`, {
  origin: 'right'
});
sr.reveal(`.choose-img`, {
  origin: 'left'
});

/* Pricing Section */
sr.reveal(`.pricing-card`, {
  interval: 100
});

/* BMI Calculator Section */
sr.reveal(`.calculator-content`, {
  origin: 'left'
});
sr.reveal(`.calculator-img`, {
  origin: 'right'
});

/* Footer Section */
sr.reveal(`.footer-wrapper, .footer-group`);
