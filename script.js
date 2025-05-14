const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link');
const homeLink = document.querySelector('a[href="index.html"]');
const aboutLink = document.querySelector('a[href="about.html"]');
const postLink = document.querySelector('a[href="post.html"]');
const contactLink = document.querySelector('a[href="contact.html"]');


const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

const currentTheme = localStorage.getItem('theme') || 'light';

body.dataset.theme = currentTheme;

if (currentTheme === 'dark') {
    sunIcon.style.display = 'inline-flex';
    moonIcon.style.display = 'none';
} else {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-flex';
}

themeToggle.addEventListener('click', () => {
    const newTheme = body.dataset.theme === 'light' ? 'dark' : 'light';
    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);

     if (newTheme === 'dark') {
        sunIcon.style.display = 'inline-flex';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-flex';
    }
});

function setActiveLink(currentPage) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    if (currentPage === 'index') {
        homeLink.classList.add('active');
    } else if (currentPage === 'about') {
        aboutLink.classList.add('active');
    } else if (currentPage === 'post') {
        postLink.classList.add('active');
    }
     else if (currentPage === 'contact') {
        contactLink.classList.add('active');
    }
}
const currentPage = window.location.pathname.split('/').pop().split('.')[0];
setActiveLink(currentPage);
