const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

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
