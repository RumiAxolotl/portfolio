const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');
const themeSwitch = document.querySelector('.theme-switch input');
const body = document.body;

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Theme Switcher
themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light'); // Store preference
    } else {
        body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark'); // Store preference
    }
});

// Load Theme Preference on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeSwitch.checked = true;
    }
});