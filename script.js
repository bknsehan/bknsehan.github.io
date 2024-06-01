// script.js

// Daftar tag (dapat diganti dengan data yang sesuai)
const tags = ["HTML", "CSS", "JavaScript", "Python", "React", "Vue", "Angular"];

// Fungsi untuk membuat tag
function createTagElement(tagName) {
    const tagElement = document.createElement("div");
    tagElement.classList.add("tag");
    tagElement.textContent = tagName;
    tagElement.addEventListener("click", function() {
        // Hapus alert
    });
    return tagElement;
}

// Fungsi untuk menambahkan tag ke dalam tag container
function renderTags() {
    const tagContainer = document.querySelector(".tag-container");
    tags.forEach(tag => {
        const tagElement = createTagElement(tag);
        tagContainer.appendChild(tagElement);
    });
}

// Panggil fungsi untuk merender tag saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    renderTags();
});
