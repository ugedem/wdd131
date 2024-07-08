document.addEventListener("DOMContentLoaded", function() {
    const yearElement = document.getElementById("year");
    const lastModifiedElement = document.getElementById("last-modified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;
});

