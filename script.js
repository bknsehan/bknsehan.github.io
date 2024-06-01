// script.js

// Fungsi untuk membuat tag
function createTagElement(tagName) {
    const tagElement = document.createElement("div");
    tagElement.classList.add("tag");
    tagElement.textContent = tagName;
    tagElement.addEventListener("click", function() {
        // Ubah warna simbol menjadi biru
        hashSymbol.style.color = "blue";
        // Tampilkan pesan mengambang
        showFloatingMessage("Anda mengklik tag: " + tagName);
    });
    return tagElement;
}

// Fungsi untuk menampilkan pesan mengambang
function showFloatingMessage(message) {
    const floatingMessage = document.createElement("div");
    floatingMessage.textContent = message;
    floatingMessage.classList.add("floating-message");
    document.body.appendChild(floatingMessage);
    setTimeout(function() {
        floatingMessage.remove();
    }, 2000);
}

// Fungsi untuk mengembalikan warna simbol menjadi abu-abu
function resetSymbolColor() {
    hashSymbol.style.color = "#aaa";
}

// Panggil fungsi untuk merender tag saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    renderTags();
});

// Panggil fungsi untuk mengembalikan warna simbol saat dokumen dimuat
document.addEventListener("DOMContentLoaded", function() {
    resetSymbolColor();
});

// Menambahkan event listener ke simbol untuk mengembalikan warna simbol ketika diklik
const hashSymbol = document.getElementById("hashSymbol");
hashSymbol.addEventListener("click", function() {
    resetSymbolColor();
});
