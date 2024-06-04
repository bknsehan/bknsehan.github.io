// Function to change the theme
function changeTheme(theme) {
    // Remove any existing theme classes from the body
    document.body.className = '';
  
    // Add the new theme class to the body
    document.body.classList.add(theme);
  
    // Save the theme to localStorage
    localStorage.setItem('selectedTheme', theme);
  }
  
  // Load the saved theme from localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      document.body.classList.add('dark'); // Default theme
    }
  });
  