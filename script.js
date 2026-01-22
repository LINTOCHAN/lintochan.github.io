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

// Snow Effect
let isSnowing = false;
const snowContainer = document.getElementById('snow-container');
const logoElement = document.querySelector('.logo');
let snowInterval;

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    
    // Random horizontal start position
    const randomX = Math.random() * window.innerWidth;
    snowflake.style.left = randomX + 'px';
    
    // Random size variation (tiny snowflakes)
    const sizeVariation = 0.3 + Math.random() * 0.4;
    snowflake.style.fontSize = sizeVariation + 'em';
    
    // Random duration (8-15 seconds)
    const duration = 8 + Math.random() * 7;
    snowflake.style.animationDuration = duration + 's';
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    snowflake.style.setProperty('--drift', drift + 'px');
    
    // Random delay
    const delay = Math.random() * 2;
    snowflake.style.animationDelay = delay + 's';
    
    // Random opacity variation
    const opacity = 0.6 + Math.random() * 0.4;
    snowflake.style.opacity = opacity;
    
    snowContainer.appendChild(snowflake);
    
    // Remove snowflake after animation completes
    setTimeout(() => {
        snowflake.remove();
    }, (duration + delay) * 1000);
}

function startSnow() {
    isSnowing = true;
    logoElement.classList.add('snowing');
    snowInterval = setInterval(createSnowflake, 100);
}

function stopSnow() {
    isSnowing = false;
    logoElement.classList.remove('snowing');
    clearInterval(snowInterval);
    snowContainer.innerHTML = '';
}

logoElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (isSnowing) {
        stopSnow();
    } else {
        startSnow();
    }
});

// Update snowfall animation to include drift
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes snowfall {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) translateX(var(--drift, 0px)) rotate(360deg);
            opacity: 0.3;
        }
    }
`;
document.head.appendChild(styleSheet);

// Typing Effect for Subtitle
const text = "Data Scientist | AI Engineer";
const subtitle = document.querySelector('.subtitle');
// (Optional: Simple typing or just leave as static CSS animation)

// ScrollSpy - Highlight active nav link based on scroll position
function setupScrollSpy() {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary)');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

setupScrollSpy();
