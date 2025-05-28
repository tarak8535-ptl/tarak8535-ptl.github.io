// Force dark mode only
document.addEventListener('DOMContentLoaded', function() {
  // Force dark mode
  document.body.classList.add('dark-mode');
  
  // Set dark mode in localStorage
  localStorage.setItem('theme', 'dark');
  
  // Remove any theme switcher elements
  const themeSwitchers = document.querySelectorAll('.theme-switcher, .theme-toggle');
  themeSwitchers.forEach(el => el.remove());
});