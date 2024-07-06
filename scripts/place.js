document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();

    const lastModifiedSpan = document.getElementById("last-modified");
    lastModifiedSpan.textContent = document.lastModified;

    const temperatureElement = document.getElementById("temperature");
    const windChillElement = document.getElementById("wind-chill");
    const windSpeed = 12;

    const temperature = parseFloat(temperatureElement.textContent);
    if (temperature && windSpeed) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill.toFixed(2) + "°C";
    }

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        }
        return "N/A";
    }

    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted successfully!");
    });
});

