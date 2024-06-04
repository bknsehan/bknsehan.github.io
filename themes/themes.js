// Function to toggle between dark and light themes
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
    setTheme(newTheme);
  }
  
  // Function to set a specific theme
  function setTheme(theme) {
    // Remove any existing theme classes from the body
    document.body.className = '';
    document.body.classList.add(theme);
  
    // Save the new theme to localStorage
    localStorage.setItem('selectedTheme', theme);
  
    // Update the button text and icon
    updateThemeToggleButton(theme);
  }
  
  // Function to update the toggle button text and icon
  function updateThemeToggleButton(theme) {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (theme === 'dark') {
      themeToggleButton.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
    } else if (theme === 'light') {
      themeToggleButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    }
  }
  
  // Load the saved theme from localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme');
    const theme = savedTheme ? savedTheme : 'light';
    document.body.classList.add(theme);
  
    // Update the button text and icon
    updateThemeToggleButton(theme);
  });
  