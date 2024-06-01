document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const texts = [":v", ":)", ":(", ":|"];
    let index = 0;

    setInterval(() => {
        searchBar.placeholder = texts[index];
        index = (index + 1) % texts.length;
    }, 2000); // Ganti teks setiap 2 detik
});
