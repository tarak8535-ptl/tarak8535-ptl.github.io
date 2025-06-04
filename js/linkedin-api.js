/**
 * LinkedIn API Integration
 * 
 * Note: This is a client-side implementation that doesn't actually fetch data from LinkedIn
 * due to CORS restrictions. In a production environment, you would need:
 * 
 * 1. A server-side component to handle OAuth authentication with LinkedIn
 * 2. Proper API credentials from LinkedIn Developer Portal
 * 3. Server endpoints to proxy LinkedIn API requests
 * 
 * This file simulates what that integration might look like with mock data.
 */

class LinkedInIntegration {
    constructor() {
        this.profileUrl = 'https://www.linkedin.com/in/rushi-patel-888440166/';
        this.profileData = {
            name: 'Rushi Patel',
            headline: 'Cloud Security & DevOps Engineer',
            skills: [
                'AWS', 'Cloud Security', 'DevOps', 'Terraform', 'Jenkins', 
                'Python', 'Java', 'Infrastructure as Code', 'CI/CD', 'Kubernetes'
            ],
            certifications: [
                'AWS Certified Solutions Architect',
                'AWS Certified Security - Specialty',
                'Certified Kubernetes Administrator'
            ],
            experience: [
                {
                    title: 'Cloud Security Engineer',
                    company: 'Current Company',
                    duration: '2021 - Present'
                },
                {
                    title: 'DevOps Engineer',
                    company: 'Previous Company',
                    duration: '2018 - 2021'
                }
            ]
        };
    }

    // Initialize the LinkedIn integration
    init() {
        this.updateProfileElements();
        this.renderSkillBadges();
        this.updateLastRefreshed();
    }

    // Update all elements with LinkedIn profile data
    updateProfileElements() {
        // Update profile links
        document.querySelectorAll('.linkedin-profile-link').forEach(element => {
            element.href = this.profileUrl;
        });
    }

    // Render skill badges in designated container
    renderSkillBadges() {
        const container = document.getElementById('linkedin-endorsements');
        if (!container) return;

        let badgesHTML = '';
        this.profileData.skills.forEach(skill => {
            badgesHTML += `<span class="endorsement-badge">${skill}</span> `;
        });
        
        container.innerHTML = badgesHTML;
    }

    // Update last refreshed timestamp
    updateLastRefreshed() {
        const elements = document.querySelectorAll('.profile-last-updated');
        const now = new Date();
        const formattedDate = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        
        elements.forEach(element => {
            element.textContent = `Profile last updated: ${formattedDate}`;
        });
    }
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const linkedIn = new LinkedInIntegration();
    linkedIn.init();
});