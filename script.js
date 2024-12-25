document.addEventListener("DOMContentLoaded", function () {
  const searchBar = document.getElementById("searchBar");
  const texts = [":v", ":)", ":(", ":|", ":3"]; // Placeholder dinamis
  let index = 0;

  // Mengubah placeholder secara dinamis setiap 0.5 detik
  setInterval(() => {
    searchBar.placeholder = texts[index];
    index = (index + 1) % texts.length;
  }, 500);

  // Fungsi untuk membaca data JSON dan mencari ACTIVITY berdasarkan CODE
  async function searchActivity(input) {
    try {
      showAlert("Sedang memproses...", "info");

      const response = await fetch("data.json");
      console.log("Response Status:", response.status);

      if (!response.ok) {
        throw new Error("JSON file tidak ditemukan atau gagal dimuat.");
      }

      const data = await response.json();
      const result = data.find((entry) => entry.CODE === input.trim());

      if (result && result.ACTIVITY) {
        showAlert(`Membuka: ${result.ACTIVITY}`, "success");
        setTimeout(() => {
          window.open(result.ACTIVITY, "_blank"); // Membuka URL di tab baru
        }, 1000);
      } else {
        throw new Error(
          result
            ? "ACTIVITY tidak ditemukan untuk CODE ini."
            : "CODE tidak ditemukan dalam data JSON.",
        );
      }
    } catch (error) {
      console.error(error);
      showAlert(error.message, "error");
    }
  }

  // Event listener untuk mendeteksi Enter di search bar
  searchBar.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const input = searchBar.value;
      if (input.trim()) {
        searchActivity(input); // Memproses input pengguna hanya saat Enter ditekan
      } else {
        showAlert("Input tidak boleh kosong!", "error");
      }
    }
  });
});
