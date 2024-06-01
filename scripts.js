document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.querySelector(".isi-konten");
    const postList = document.getElementById("post-list");

    // Dapatkan nama pengguna dan repository dari URL
    const [,, username, repo] = window.location.pathname.split('/');
    const path = 'post';  // Path ke folder yang ingin diambil isinya
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/${path}`;

    // Mengambil daftar post dari direktori
    fetch(apiUrl)
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                if (file.type === 'file' && file.name.endsWith('.html')) {
                    // Buat sebuah opsi dalam dropdown untuk setiap post
                    const option = document.createElement('option');
                    option.text = file.name.replace('.html', '');
                    option.value = file.download_url;
                    postList.add(option);
                }
            });
        })
        .catch(error => console.error('Error fetching file list:', error));

    // Menampilkan isi post saat dipilih
    postList.addEventListener('change', function() {
        const selectedPostUrl = postList.value;
        fetch(selectedPostUrl)
            .then(response => response.text())
            .then(html => {
                // Hapus konten sebelumnya dari post
                postsContainer.innerHTML = '';
                // Tambahkan konten post yang dipilih
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = html;
                postsContainer.appendChild(postElement);
            })
            .catch(error => console.error('Error fetching post content:', error));
    });
});
