document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const texts = [":v", ":)", ":(", ":|", ":3"]; // Menambahkan ":3" ke dalam array
    let index = 0;

    setInterval(() => {
        searchBar.placeholder = texts[index];
        index = (index + 1) % texts.length;
    }, 500); // Mengubah interval menjadi setiap 0.5 detik
});
