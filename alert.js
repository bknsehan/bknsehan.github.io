// Fungsi untuk menampilkan notifikasi
function showAlert(message, type) {
  const alertBox = document.getElementById("alertBox");

  // Menentukan warna berdasarkan tipe notifikasi
  let backgroundColor;
  switch (type) {
    case "info":
      backgroundColor = "blue";
      break;
    case "error":
      backgroundColor = "red";
      break;
    case "success":
      backgroundColor = "green";
      break;
    default:
      backgroundColor = "gray";
  }

  // Menampilkan pesan
  alertBox.textContent = message;
  alertBox.style.backgroundColor = backgroundColor;
  alertBox.style.color = "white";
  alertBox.style.display = "block";

  // Menghilangkan notifikasi setelah 3 detik
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 3000);
}
