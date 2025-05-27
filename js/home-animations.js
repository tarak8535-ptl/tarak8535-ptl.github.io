/**
 * Home Page Animations
 * 
 * Adds interactive animations and effects to the home page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animate tech icons with random movements
    animateTechIcons();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Add typing effect to elements with class 'typing-effect'
    initTypingEffect();
    
    // Initialize counters
    initCounters();
});

// Animate floating tech icons with random movements
function animateTechIcons() {
    const icons = document.querySelectorAll('.tech-icon');
    
    icons.forEach(icon => {
        // Random starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Random animation duration between 15-30s
        const duration = 15 + Math.random() * 15;
        
        // Random delay
        const delay = Math.random() * 5;
        
        // Set initial position
        icon.style.left = `${startX}%`;
        icon.style.top = `${startY}%`;
        
        // Set animation
        icon.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
    });
}

// Initialize scroll animations
function initScrollAnimations() {
    // Add animation classes to elements as they scroll into view
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(animateOnScroll, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });
}

// Initialize typing effect
function initTypingEffect() {
    // The typing effect is handled by CSS, but we can enhance it here
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        // Get the text content
        const text = element.textContent;
        
        // Clear the element
        element.textContent = '';
        
        // Create a span for the cursor
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        cursor.textContent = '|';
        
        // Append the cursor
        element.appendChild(cursor);
        
        // Type the text
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                // Insert character before cursor
                element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
                i++;
            } else {
                clearInterval(typeInterval);
                // Remove cursor after typing is complete
                setTimeout(() => {
                    cursor.style.display = 'none';
                }, 1000);
            }
        }, 100);
    });
}

// Initialize counters
function initCounters() {
    const counters = document.querySelectorAll('.stats-counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 30); // Update every 30ms
        
        counter.innerText = '0';
        
        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target;
            }
        };
        
        // Start counter when element comes into view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
}