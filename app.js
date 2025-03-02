document.addEventListener("DOMContentLoaded", function () {
    const certificateItems = document.querySelectorAll(".certificate-item");

    certificateItems.forEach((item) => {
        item.addEventListener("click", () => {
            const certificateName = item.querySelector(".certificate-name");
            certificateName.style.bottom = "0";
        });
    });
});