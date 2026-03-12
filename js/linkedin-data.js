// LinkedIn Data Fetcher
document.addEventListener('DOMContentLoaded', function() {
    // LinkedIn profile URL
    const linkedinProfileUrl = 'https://www.linkedin.com/in/rushi-patel-888440166/';
    
    // Function to update profile information
    function updateProfileInfo() {
        // Note: Due to CORS restrictions, direct scraping from LinkedIn isn't possible client-side
        // This is a placeholder for where you would integrate with a backend service or LinkedIn API
        
        // Display LinkedIn profile link
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
    }
    
    // Initialize
    updateProfileInfo();
});