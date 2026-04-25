/* ----- Basketball Game button functions ------------------------*/
const btn = document.getElementById("basketBtn");
const details = document.getElementById("basketDetails");

if (btn) {
    btn.addEventListener("click", function() {
        if (details.style.display === "none") {
            details.style.display = "block";
            btn.textContent = "Hide Details";  
        } else {
            details.style.display = "none";
            btn.textContent = "View Details";
        }
    });
}

/* ----- Study Night button functions  ------------------------*/
const studyBtn = document.getElementById("studyBtn");
const studyDetails = document.getElementById("studyDetails");

if (studyBtn) {
    studyBtn.addEventListener("click", function() {
        if (studyDetails.style.display === "none") {
            studyDetails.style.display = "block";
            studyBtn.textContent = "Hide Details";
        } else {
            studyDetails.style.display = "none";
            studyBtn.textContent = "View Details";
        }
    });
}

/* ---- Make your own Pizza button functions --------------------*/
const pizzaBtn = document.getElementById("pizzaBtn");
const pizzaDetails = document.getElementById("pizzaDetails");

if (pizzaBtn) {
    pizzaBtn.addEventListener("click", function() {
        if (pizzaDetails.style.display === "none") {
            pizzaDetails.style.display = "block";
            pizzaBtn.textContent = "Hide Details";
        } else {
            pizzaDetails.style.display = "none";
            pizzaBtn.textContent = "View Details";
        }
    });
}

/* ---- Weather API -------------------------------------------------*/
fetch("https://api.open-meteo.com/v1/forecast?latitude=41.88&longitude=-87.63&current_weather=true")
    .then(response => response.json())
    .then(data => {

        // Get values from API
        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;

        // Show temperature
        document.getElementById("weatherInfo").textContent = `${temp}°C`;

        // Show wind
        document.getElementById("windInfo").textContent = `${wind} km/h`;

    })
    .catch(error => {

        // If something goes wrong
        document.getElementById("weatherInfo").textContent = "Could not load weather";
        document.getElementById("windInfo").textContent = "--";

    });