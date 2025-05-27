/**
 * LinkedIn Widget Integration
 * 
 * This script adds a LinkedIn profile widget to the portfolio site.
 * It uses the LinkedIn Profile API to display profile information.
 */

class LinkedInWidget {
    constructor() {
        this.profileUrl = 'https://www.linkedin.com/in/rushi-patel-888440166/';
        this.containerSelector = '#linkedin-widget-container';
    }

    /**
     * Initialize the LinkedIn widget
     */
    init() {
        this.createWidgetContainer();
        this.loadProfileData();
        this.setupEventListeners();
    }

    /**
     * Create the widget container if it doesn't exist
     */
    createWidgetContainer() {
        if (!document.querySelector(this.containerSelector)) {
            const container = document.createElement('div');
            container.id = 'linkedin-widget-container';
            container.className = 'linkedin-widget-container';
            
            // Add to the page before the footer
            const footer = document.querySelector('footer');
            if (footer) {
                footer.parentNode.insertBefore(container, footer);
            }
        }
    }

    /**
     * Load profile data from LinkedIn
     * Note: This is a mock implementation as direct API access requires authentication
     */
    loadProfileData() {
        // In a real implementation, this would make an API call to your backend
        // which would then use LinkedIn API with proper authentication
        
        const profileData = {
            name: 'Rushi Patel',
            headline: 'Cloud Security & DevOps Engineer',
            summary: 'Passionate about cloud security and DevOps automation',
            skills: [
                'AWS', 'Cloud Security', 'DevOps', 'Terraform', 'Jenkins', 
                'Python', 'Java', 'Infrastructure as Code', 'CI/CD', 'Kubernetes'
            ],
            recommendations: 3,
            connections: '500+'
        };
        
        this.renderWidget(profileData);
    }

    /**
     * Render the LinkedIn widget with profile data
     */
    renderWidget(data) {
        const container = document.querySelector(this.containerSelector);
        if (!container) return;
        
        // Update all LinkedIn profile links
        document.querySelectorAll('.linkedin-profile-link').forEach(link => {
            link.href = this.profileUrl;
            link.setAttribute('aria-label', `${data.name}'s LinkedIn Profile`);
        });
        
        // Update endorsement badges
        const endorsementContainer = document.getElementById('linkedin-endorsements');
        if (endorsementContainer) {
            let badgesHTML = '';
            data.skills.forEach(skill => {
                badgesHTML += `<span class="endorsement-badge">${skill}</span> `;
            });
            endorsementContainer.innerHTML = badgesHTML;
        }
        
        // Update last refreshed timestamp
        document.querySelectorAll('.profile-last-updated').forEach(element => {
            const now = new Date();
            element.textContent = `Profile last updated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        });
    }

    /**
     * Set up event listeners for widget interactions
     */
    setupEventListeners() {
        // Add click tracking for LinkedIn profile links
        document.querySelectorAll('.linkedin-profile-link, .linkedin-connect-btn').forEach(link => {
            link.addEventListener('click', () => {
                console.log('LinkedIn profile link clicked');
                // In a real implementation, you might want to track this event
            });
        });
    }
}

// Initialize the LinkedIn widget when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const linkedInWidget = new LinkedInWidget();
    linkedInWidget.init();
});