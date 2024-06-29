document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    yearElement.textContent = currentYear;
    lastModifiedElement.textContent = lastModified;

    // Wind Chill Calculation
    const temperature = 28; // °C
    const windSpeed = 12; // km/h

    const calculateWindChill = (temp, wind) => {
        if (temp <= 10 && wind > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
        }
        return 'N/A';
    };

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('wind-chill').textContent = windChill + '°C';
});
