// Smooth scrolling for navigation links
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

// Header scroll effect
const header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Phone mockup hover effects
const phoneElements = document.querySelectorAll('.phone-mockup');

phoneElements.forEach(phone => {
    phone.addEventListener('mouseenter', () => {
        phone.style.transform = phone.style.transform + ' scale(1.05)';
        phone.style.transition = 'transform 0.3s ease';
    });
    
    phone.addEventListener('mouseleave', () => {
        // Reset to original transform
        const originalTransform = phone.classList.contains('main-phone') 
            ? 'rotate(-5deg) scale(1.1)' 
            : phone.style.transform.replace(' scale(1.05)', '');
        phone.style.transform = originalTransform;
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .phone-mockup.floating').forEach(el => {
    observer.observe(el);
});

// Add CSS for animate-in class
const style = document.createElement('style');
style.textContent = `
    .feature-card,
    .phone-mockup.floating {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .feature-card.animate-in,
    .phone-mockup.floating.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .phone-mockup.floating:nth-child(2n).animate-in {
        transition-delay: 0.2s;
    }
    
    .phone-mockup.floating:nth-child(3n).animate-in {
        transition-delay: 0.4s;
    }
`;
document.head.appendChild(style);

// App interface interactions
document.addEventListener('DOMContentLoaded', () => {
    // Time slot selection
    const timeSlots = document.querySelectorAll('.time-slot');
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('active'));
            slot.classList.add('active');
        });
    });
    
    // Simulated appointment status updates
    const appointmentItems = document.querySelectorAll('.appointment-item');
    let currentIndex = 0;
    
    setInterval(() => {
        // Simulate appointment progress
        appointmentItems.forEach((item, index) => {
            const status = item.querySelector('.status');
            if (index < currentIndex) {
                status.className = 'status completed';
                status.innerHTML = '✓';
            } else if (index === currentIndex) {
                status.className = 'status current';
                status.innerHTML = '●';
            } else {
                status.className = 'status upcoming';
                status.innerHTML = '○';
            }
        });
        
        currentIndex = (currentIndex + 1) % appointmentItems.length;
    }, 4000);
    
    // Dashboard stats animation
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 50);
    };
    
    // Animate dashboard numbers
    const statNumbers = document.querySelectorAll('.stat-number, .admin-number');
    statNumbers.forEach(element => {
        const target = parseInt(element.textContent);
        element.textContent = '0';
        setTimeout(() => animateCounter(element, target), 1000);
    });
});

// Smooth phone mockup rotations on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    const floatingPhones = document.querySelectorAll('.phone-mockup.floating');
    floatingPhones.forEach((phone, index) => {
        const speed = 0.1 + (index * 0.02);
        phone.style.transform = phone.style.transform.split('translateY')[0] + 
            `translateY(${rate * speed}px)`;
    });
});

// Download button click tracking (for analytics)
const downloadButtons = document.querySelectorAll('.btn');
downloadButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // You can add actual download logic or analytics tracking here
        console.log('Download button clicked:', button.textContent.trim());
        
        // For demo purposes, show a toast notification
        showToast('Download will begin shortly!');
    });
});

// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Slide in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Slide out and remove
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Loading animation for page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroPhone = document.querySelector('.hero-phone');
    const heroText = document.querySelector('.hero-text');
    
    if (heroPhone && heroText) {
        heroPhone.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroText.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Responsive navigation toggle (for mobile)
const createMobileMenu = () => {
    const nav = document.querySelector('.navigation');
    const header = document.querySelector('.header .nav');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-toggle';
            toggle.innerHTML = '☰';
            toggle.style.cssText = `
                background: none;
                border: none;
                font-size: 24px;
                color: #4a5568;
                cursor: pointer;
                display: block;
            `;
            
            toggle.addEventListener('click', () => {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.flexDirection = 'column';
                nav.style.padding = '20px';
                nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            });
            
            header.appendChild(toggle);
        }
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();