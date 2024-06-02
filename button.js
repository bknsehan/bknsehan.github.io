document.addEventListener('DOMContentLoaded', function() {
    const tagToggleButton = document.getElementById('tagToggleButton');
    const tagBox = document.getElementById('tagBox');

    tagToggleButton.addEventListener('click', function() {
        tagBox.classList.toggle('show');
    });
});
