document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.querySelector(".isi-konten");

    // Dapatkan nama pengguna dan repository dari URL
    const [,, username, repo] = window.location.pathname.split('/');

    // Path ke folder yang ingin diambil isinya
    const path = 'post';

    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                if (file.type === 'file' && file.name.endsWith('.html')) {
                    fetch(file.download_url)
                        .then(response => response.text())
                        .then(html => {
                            const postElement = document.createElement('div');
                            postElement.classList.add('post');
                            postElement.innerHTML = html;  // Menggunakan innerHTML untuk memuat konten HTML
                            postsContainer.appendChild(postElement);
                        })
                        .catch(error => console.error('Error fetching post content:', error));
                }
            });
        })
        .catch(error => console.error('Error fetching file list:', error));
});
