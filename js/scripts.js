/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

// LinkedIn Integration Functions
function initLinkedInIntegration() {
    // LinkedIn profile URL
    const linkedinProfileUrl = 'https://www.linkedin.com/in/rushi-patel-888440166/';
    
    // Update LinkedIn profile links
    const linkedinElements = document.querySelectorAll('.linkedin-profile-link');
    linkedinElements.forEach(element => {
        element.href = linkedinProfileUrl;
    });
    
    // Update last refreshed timestamp
    const lastUpdatedElements = document.querySelectorAll('.profile-last-updated');
    const currentDate = new Date();
    lastUpdatedElements.forEach(element => {
        element.textContent = `Profile last updated: ${currentDate.toLocaleDateString()}`;
    });
    
    // Add LinkedIn endorsement badges if they exist
    const endorsementContainer = document.getElementById('linkedin-endorsements');
    if (endorsementContainer) {
        const skills = ['AWS', 'Cloud Security', 'DevOps', 'Terraform', 'Jenkins', 'Python'];
        let endorsementHTML = '';
        
        skills.forEach(skill => {
            endorsementHTML += `<span class="endorsement-badge">${skill}</span> `;
        });
        
        endorsementContainer.innerHTML = endorsementHTML;
    }
}

// Initialize LinkedIn integration when page loads
document.addEventListener('DOMContentLoaded', function() {
    initLinkedInIntegration();
});