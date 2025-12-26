/* ===========================================
   FILE: js/main.js
   Core Functionality - Navigation & Smooth Scroll
   =========================================== */

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Active navigation link highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add scroll effect to navigation bar
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.padding = '1rem 5%';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
            nav.style.background = 'rgba(13, 17, 23, 0.95)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(13, 17, 23, 0.8)';
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    let isDark = true;

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        themeIcon.textContent = isDark ? '🌙' : '☀️';
        
        // Add theme toggle animation
        document.body.style.transition = 'background 0.5s ease';
        
        // You can implement actual theme switching here
        console.log('Theme toggled:', isDark ? 'dark' : 'light');
    });
}

// Typing effect for subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.typing-text');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Initialize all main functions
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initActiveNavigation();
    initNavbarScroll();
    initThemeToggle();
    initTypingEffect();
});
/* ===========================================
   FILE: js/main.js
   Core Functionality - Navigation & Smooth Scroll
   =========================================== */

// Smooth scrolling for navigation links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Active navigation link highlighting
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add scroll effect to navigation bar
function initNavbarScroll() {
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.padding = '1rem 5%';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
            nav.style.background = 'rgba(13, 17, 23, 0.95)';
        } else {
            nav.style.padding = '1.5rem 5%';
            nav.style.boxShadow = 'none';
            nav.style.background = 'rgba(13, 17, 23, 0.8)';
        }
    });
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    let isDark = true;

    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        themeIcon.textContent = isDark ? '🌙' : '☀️';
        
        // Add theme toggle animation
        document.body.style.transition = 'background 0.5s ease';
        
        // You can implement actual theme switching here
        console.log('Theme toggled:', isDark ? 'dark' : 'light');
    });
}

// Typing effect for subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.typing-text');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Initialize all main functions
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initActiveNavigation();
    initNavbarScroll();
    initThemeToggle();
    initTypingEffect();
});
