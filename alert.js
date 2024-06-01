document.addEventListener("DOMContentLoaded", function() {
    const tags = document.querySelectorAll(".tag");
    const alertBox = document.getElementById("alertBox");

    tags.forEach(tag => {
        tag.addEventListener("click", function() {
            const selectedTags = document.querySelectorAll(".selected");
            if (selectedTags.length >= 2 && !tag.classList.contains("selected")) {
                alertBox.innerText = "Anda hanya dapat memilih maksimal 2 tag!";
                alertBox.style.display = "block";
                setTimeout(() => {
                    alertBox.style.display = "none";
                }, 3000);
            }
        });
    });
});
