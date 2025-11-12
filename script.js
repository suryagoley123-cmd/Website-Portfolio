// ====== Mobile Navigation Menu Toggle ======
const navToggle = document.createElement('div');
navToggle.classList.add('menu-toggle');
navToggle.innerHTML = '&#9776;'; // hamburger icon
document.querySelector('header').prepend(navToggle);

const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// ====== Smooth Scrolling for Navigation Links ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      nav.classList.remove('active');
      navToggle.classList.remove('open');
    }
  });
});

// ====== Contact Form Submission Alert ======
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  });
}

// ====== Hide/Show Header on Scroll ======
let lastScroll = 0;
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastScroll = currentScroll;
});
