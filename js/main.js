/* ===== DOM ELEMENTS ===== */
const hamburger = document.querySelector('.hamburger');
const navlinksContainer = document.querySelector('.navlinks-container');
const navlinks = document.querySelectorAll('.navlinks-container a');
const contactForm = document.querySelector('.contact-form');
const body = document.body;

/* ===== NAVIGATION HAMBURGER ===== */
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navlinksContainer.classList.toggle('open');
});

// Close menu when link is clicked
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navlinksContainer.classList.remove('open');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        hamburger?.classList.remove('open');
        navlinksContainer?.classList.remove('open');
    }
});

/* ===== SMOOTH SCROLL NAVIGATION ===== */
navlinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

/* ===== SCROLL ANIMATIONS ===== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to all relevant elements
const animatedElements = document.querySelectorAll(
    '.presentation-col-1, .presentation-col-2, .parcours-item, .skill-card, .project-card, .stat-card, .hobby-card'
);
animatedElements.forEach(el => observer.observe(el));

/* ===== FORM HANDLING ===== */
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: contactForm.querySelector('input[name="name"]')?.value || '',
            email: contactForm.querySelector('input[name="email"]')?.value || '',
            message: contactForm.querySelector('textarea[name="message"]')?.value || ''
        };
        
        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }
        
        try {
            // Send form data to backend (implement according to your backend)
            console.log('Form submitted:', formData);
            showNotification('Message sent successfully!', 'success');
            contactForm.reset();
        } catch (error) {
            console.error('Form submission error:', error);
            showNotification('Error sending message. Please try again.', 'error');
        }
    });
}

/* ===== NOTIFICATION SYSTEM ===== */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'rgba(0, 212, 255, 0.9)' : 'rgba(255, 71, 87, 0.9)'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/* ===== SKILL CARDS INTERACTION ===== */
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        skillCards.forEach(c => c.style.opacity = '0.6');
        card.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        skillCards.forEach(c => c.style.opacity = '1');
    });
});

/* ===== PROJECT CARDS INTERACTIONS ===== */
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectLink = card.querySelector('.project-link');
        if (projectLink) {
            window.open(projectLink.href, '_blank');
        }
    });
});

/* ===== STATS COUNTER ANIMATION ===== */
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(num => {
                const targetValue = parseInt(num.textContent);
                animateCounter(num, targetValue);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.getElementById('stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

/* ===== SCROLL TO TOP BUTTON ===== */
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 45px;
        height: 45px;
        border: none;
        border-radius: 50%;
        background: linear-gradient(135deg, #e94560, #ff6b6b);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(233, 69, 96, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
            scrollBtn.style.alignItems = 'center';
            scrollBtn.style.justifyContent = 'center';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    scrollBtn.addEventListener('mouseover', () => {
        scrollBtn.style.transform = 'translateY(-5px)';
    });
    
    scrollBtn.addEventListener('mouseout', () => {
        scrollBtn.style.transform = 'translateY(0)';
    });
}

createScrollToTopButton();

/* ===== PERFORMANCE MONITORING ===== */
if ('PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration.toFixed(2)}ms`);
            }
        });
        observer.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
    } catch (e) {
        console.warn('PerformanceObserver not supported');
    }
}

/* ===== LAZY LOADING IMAGES ===== */
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        images.forEach(img => imageObserver.observe(img));
    }
}

setupLazyLoading();

/* ===== PRELOAD CRITICAL RESOURCES ===== */
function preloadCriticalResources() {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = 'cv.webp'; // or your hero image
    document.head.appendChild(link);
}

window.addEventListener('load', preloadCriticalResources);

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
// Keyboard navigation for interactive elements
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger?.classList.remove('open');
        navlinksContainer?.classList.remove('open');
    }
});

// Focus management
const focusableElements = document.querySelectorAll(
    'a, button, input, [tabindex]:not([tabindex="-1"])'
);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const activeElement = document.activeElement;
        const focusIndex = Array.from(focusableElements).indexOf(activeElement);
        
        if (e.shiftKey && focusIndex === 0) {
            focusableElements[focusableElements.length - 1].focus();
            e.preventDefault();
        } else if (!e.shiftKey && focusIndex === focusableElements.length - 1) {
            focusableElements[0].focus();
            e.preventDefault();
        }
    }
});

console.log('Portfolio JS loaded successfully');
