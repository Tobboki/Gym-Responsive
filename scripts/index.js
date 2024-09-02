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