// Initialize Animate On Scroll
AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(3, 7, 18, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    } else {
        navbar.style.background = 'rgba(3, 7, 18, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Typing Effect for Subtitle
const text = "Data Scientist | AI Engineer";
const subtitle = document.querySelector('.subtitle');
// (Optional: Simple typing or just leave as static CSS animation)
