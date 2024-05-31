document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });

    // Scroll to top
    const scrollTopButton = document.getElementById('scroll-top');
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll to bottom
    const scrollBottomButton = document.getElementById('scroll-bottom');
    scrollBottomButton.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});
