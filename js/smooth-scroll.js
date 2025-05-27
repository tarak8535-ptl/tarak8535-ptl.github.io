/**
 * Smooth Scroll Implementation
 * 
 * Enhances navigation with smooth scrolling between sections
 */

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('#mainNav .nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only process internal links
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Get header height for offset
          const headerHeight = document.querySelector('#mainNav').offsetHeight;
          
          // Calculate position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          history.pushState(null, null, targetId);
        }
      }
    });
  });
  
  // Add scroll event listener to handle active state
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Get all sections
    const sections = document.querySelectorAll('section, header');
    
    // Get navbar height for offset calculation
    const navHeight = document.querySelector('#mainNav').offsetHeight;
    
    // Check which section is in view
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 20; // 20px buffer
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Get the id of the current section
        const id = section.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to current section link
        const activeLink = document.querySelector(`#mainNav .nav-link[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
});