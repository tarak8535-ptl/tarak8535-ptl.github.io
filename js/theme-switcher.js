/**
 * Theme Switcher
 * 
 * Allows toggling between light and dark themes
 */

class ThemeSwitcher {
    constructor() {
        this.darkThemeEnabled = true; // Start with dark theme by default
        this.themeToggleSelector = '.theme-toggle';
        this.darkThemeClass = 'dark-theme';
        this.lightThemeClass = 'light-theme';
        this.darkThemeCssLink = 'css/dark-theme.css';
        this.storageKey = 'darkThemeEnabled';
    }

    init() {
        // Check if user has a saved preference
        const savedPreference = localStorage.getItem(this.storageKey);
        if (savedPreference !== null) {
            this.darkThemeEnabled = savedPreference === 'true';
        }

        // Apply the current theme
        this.applyTheme();

        // Add event listeners to theme toggle buttons
        document.querySelectorAll(this.themeToggleSelector).forEach(button => {
            button.addEventListener('click', () => this.toggleTheme());
        });

        // Add theme toggle button if it doesn't exist
        this.createThemeToggleButton();
    }

    applyTheme() {
        // Update theme link status
        const darkThemeLink = document.querySelector(`link[href="${this.darkThemeCssLink}"]`);
        
        if (this.darkThemeEnabled) {
            if (!darkThemeLink) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = this.darkThemeCssLink;
                document.head.appendChild(link);
            }
            document.body.classList.add(this.darkThemeClass);
            document.body.classList.remove(this.lightThemeClass);
        } else {
            if (darkThemeLink) {
                darkThemeLink.disabled = true;
            }
            document.body.classList.add(this.lightThemeClass);
            document.body.classList.remove(this.darkThemeClass);
        }

        // Update toggle button icons
        document.querySelectorAll(this.themeToggleSelector).forEach(button => {
            const icon = button.querySelector('i');
            if (icon) {
                if (this.darkThemeEnabled) {
                    icon.className = 'fas fa-sun';
                    button.setAttribute('title', 'Switch to Light Mode');
                } else {
                    icon.className = 'fas fa-moon';
                    button.setAttribute('title', 'Switch to Dark Mode');
                }
            }
        });

        // Save preference
        localStorage.setItem(this.storageKey, this.darkThemeEnabled);
    }

    toggleTheme() {
        this.darkThemeEnabled = !this.darkThemeEnabled;
        this.applyTheme();
    }

    createThemeToggleButton() {
        // Only create if it doesn't exist
        if (document.querySelector(this.themeToggleSelector)) {
            return;
        }

        const button = document.createElement('button');
        button.className = 'theme-toggle btn btn-sm';
        button.innerHTML = `<i class="${this.darkThemeEnabled ? 'fas fa-sun' : 'fas fa-moon'}"></i>`;
        button.setAttribute('title', this.darkThemeEnabled ? 'Switch to Light Mode' : 'Switch to Dark Mode');
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.zIndex = '1000';
        button.style.borderRadius = '50%';
        button.style.width = '50px';
        button.style.height = '50px';
        button.style.fontSize = '1.2rem';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.backgroundColor = this.darkThemeEnabled ? '#e0e0e0' : '#333';
        button.style.color = this.darkThemeEnabled ? '#333' : '#e0e0e0';
        button.style.border = 'none';
        button.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';

        document.body.appendChild(button);
        button.addEventListener('click', () => this.toggleTheme());
    }
}

// Initialize theme switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = new ThemeSwitcher();
    themeSwitcher.init();
});