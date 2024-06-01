document.addEventListener('DOMContentLoaded', function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeTogglePopup = document.getElementById('dark-mode-toggle-popup');

    // Muat pengaturan dari localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
        darkModeToggle.checked = true;
        darkModeTogglePopup.checked = true;
    } else {
        disableDarkMode();
    }

    // Simpan pengaturan ketika pengguna mengubahnya dari menu bawah
    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Simpan pengaturan ketika pengguna mengubahnya dari popup pengaturan
    darkModeTogglePopup.addEventListener('change', function () {
        if (darkModeTogglePopup.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
            darkModeToggle.checked = true;
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
            darkModeToggle.checked = false;
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

    // Tampilkan popup pengaturan
    document.getElementById('settings-btn').addEventListener('click', function() {
        document.getElementById('settings-popup').style.display = 'block';
    });

    // Tutup popup pengaturan
    document.getElementById('close-settings-btn').addEventListener('click', function() {
        document.getElementById('settings-popup').style.display = 'none';
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
    }
});
