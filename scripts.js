document.addEventListener('DOMContentLoaded', function() {
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

    // Simpan pengaturan ketika pengguna mengubahnya
    darkModeToggle.addEventListener('change', function() {
        if (darkModeToggle.checked) {
            enableDarkMode();
            localStorage.setItem('darkMode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    darkModeTogglePopup.addEventListener('change', function() {
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

    document.getElementById('settings-btn').addEventListener('click', function() {
        document.getElementById('settings-popup').style.display = 'block';
    });

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
