// Navbar Fix JavaScript
// Force navbar to always have background color regardless of scroll position

document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar element
    const navbar = document.getElementById('mainNav');
    
    if (navbar) {
        // Add the navbar-scrolled class immediately
        navbar.classList.add('navbar-shrink');
        navbar.classList.add('navbar-scrolled');
        
        // Override the scroll event to keep the navbar solid
        window.addEventListener('scroll', function() {
            navbar.classList.add('navbar-shrink');
            navbar.classList.add('navbar-scrolled');
        });
    }
});