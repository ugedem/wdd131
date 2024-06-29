document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;

    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleDateString();

    // Calculate Wind Chill
    const temperature = 28; // static temperature in °C
    const windSpeed = 12; // static wind speed in km/h

    const calculateWindChill = (temp, speed) => {
        if (temp <= 10 && speed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
        }
        return "N/A";
    };

    const windChillElement = document.getElementById('wind-chill');
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);
});
