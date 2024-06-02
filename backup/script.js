document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const texts = [":v", ":)", ":(", ":|", ":3"]; // Menambahkan ":3" ke dalam array
    let index = 0;

    setInterval(() => {
        searchBar.placeholder = texts[index];
        index = (index + 1) % texts.length;
    }, 500); // Mengubah interval menjadi setiap 0.5 detik

    const tags = document.querySelectorAll(".tag");
    let selectedTags = [];

    tags.forEach(tag => {
        tag.addEventListener("click", function() {
            if (selectedTags.length < 2 || tag.classList.contains("selected")) {
                tag.classList.toggle("selected");
                if (tag.classList.contains("selected")) {
                    selectedTags.push(tag.dataset.tag);
                } else {
                    selectedTags = selectedTags.filter(item => item !== tag.dataset.tag);
                }
            }
        });
    });

    searchBar.addEventListener("input", function() {
        // Code untuk pencarian
    });
});
