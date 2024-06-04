document.addEventListener('DOMContentLoaded', function() {
    const tagToggleButton = document.getElementById('tagToggleButton');
    const tagBox = document.getElementById('tagBox');

    tagToggleButton.addEventListener('click', function() {
        tagBox.classList.toggle('show');
    });
});

function toggleThemeOptionsWindow() {
    var themeOptionsWindow = document.getElementById('themeOptionsWindow');
    if (themeOptionsWindow.style.display === 'none') {
        themeOptionsWindow.style.display = 'flex';
    } else {
        themeOptionsWindow.style.display = 'none';
    }
}
