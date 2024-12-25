// Fungsi untuk membaca file JSON dan memproses input pengguna
async function searchActivity() {
  const searchInput = document.getElementById("searchBar").value.trim();
  const alertBox = document.getElementById("alertBox");

  try {
    // Memuat file JSON
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Gagal memuat data JSON.");
    const data = await response.json();

    // Mencari kecocokan CODE
    const result = data.find((entry) => entry.CODE === searchInput);

    if (result) {
      alertBox.textContent = `Membuka: ${result.ACTIVITY}`;
      alertBox.style.backgroundColor = "green";
      alertBox.style.color = "white";

      // Arahkan ke ACTIVITY
      setTimeout(() => {
        window.location.href = result.ACTIVITY;
      }, 1000);
    } else {
      alertBox.textContent = "CODE tidak ditemukan!";
      alertBox.style.backgroundColor = "red";
      alertBox.style.color = "white";
    }

    // Tampilkan notifikasi sementara
    alertBox.style.display = "block";
    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
  } catch (error) {
    console.error(error);
    alertBox.textContent = "Terjadi kesalahan!";
    alertBox.style.backgroundColor = "orange";
    alertBox.style.color = "white";
    alertBox.style.display = "block";
  }
}

// Tambahkan event listener untuk search bar
document
  .getElementById("searchBar")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchActivity();
    }
  });
