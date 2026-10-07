

const API_KEY = "c0d5cef4917a4a0d8de160945260610";



const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const errorMessage = document.getElementById("errorMessage");

const weatherSection = document.getElementById("weatherSection");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");

const forecastContainer =
    document.getElementById("forecastContainer");

const travelSuggestion =
    document.getElementById("travelSuggestion");



searchButton.addEventListener("click", searchWeather);



cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});



async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {

        showError("Please enter a city name.");

        return;
    }

    errorMessage.textContent = "";

    searchButton.textContent = "Loading...";
    searchButton.disabled = true;

    try {

        // Current weather API

        const currentURL =
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}`;

        const currentResponse =
            await fetch(currentURL);

        const currentData =
            await currentResponse.json();


        // Check API error

        if (!currentResponse.ok) {

            throw new Error(
                currentData.error
                    ? currentData.error.message
                    : "Unable to get weather data."
            );

        }



        displayWeather(currentData);




        const forecastURL =
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(city)}&days=3`;

        const forecastResponse =
            await fetch(forecastURL);

        const forecastData =
            await forecastResponse.json();


        if (!forecastResponse.ok) {

            throw new Error(
                forecastData.error
                    ? forecastData.error.message
                    : "Unable to get forecast."
            );

        }


        
        displayForecast(forecastData);


        // Travel suggestion

        displayTravelSuggestion(
            currentData.current.condition.text
        );


    } catch (error) {

        console.error(error);

        showError(error.message);

        weatherSection.style.display = "none";

    } finally {

        searchButton.textContent = "Search";

        searchButton.disabled = false;

    }

}


// ===============================
// DISPLAY CURRENT WEATHER
// ===============================

function displayWeather(data) {

    weatherSection.style.display = "block";


    cityName.textContent =
        `${data.location.name}, ${data.location.country}`;


    temperature.textContent =
        `${Math.round(data.current.temp_c)}°C`;


    weatherDescription.textContent =
        data.current.condition.text;


    humidity.textContent =
        `${data.current.humidity}%`;


    wind.textContent =
        `${data.current.wind_kph} km/h`;


    feelsLike.textContent =
        `${Math.round(data.current.feelslike_c)}°C`;


    weatherIcon.src =
        "https:" + data.current.condition.icon;

}


// ===============================
// DISPLAY FORECAST
// ===============================

function displayForecast(data) {

    forecastContainer.innerHTML = "";


    data.forecast.forecastday.forEach(function (day) {

        const forecastCard =
            document.createElement("div");

        forecastCard.className =
            "forecast-card";


        forecastCard.innerHTML = `

            <h3>
                ${formatDate(day.date)}
            </h3>

            <img
                src="https:${day.day.condition.icon}"
                alt="Weather"
            >

            <p>
                ${day.day.condition.text}
            </p>

            <h3>
                ${Math.round(day.day.maxtemp_c)}°C
            </h3>

            <p>
                Min:
                ${Math.round(day.day.mintemp_c)}°C
            </p>

            <p>
                💧 ${day.day.avghumidity}%
            </p>

        `;


        forecastContainer.appendChild(
            forecastCard
        );

    });

}


// ===============================
// FORMAT DATE
// ===============================

function formatDate(dateString) {

    const date =
        new Date(dateString);

    return date.toLocaleDateString(
        "en-IN",
        {
            weekday: "short",
            day: "numeric",
            month: "short"
        }
    );

}


// ===============================
// TRAVEL SUGGESTION
// ===============================

function displayTravelSuggestion(condition) {

    const weather =
        condition.toLowerCase();

    let suggestion;


    if (
        weather.includes("sunny") ||
        weather.includes("clear")
    ) {

        suggestion =
            "☀️ Great weather for sightseeing and outdoor activities!";

    }

    else if (
        weather.includes("rain")
    ) {

        suggestion =
            "🌧️ Rain is expected. Carry an umbrella and plan indoor activities.";

    }

    else if (
        weather.includes("cloud")
    ) {

        suggestion =
            "☁️ Cloudy weather. It is a good time for city sightseeing.";

    }

    else if (
        weather.includes("thunder")
    ) {

        suggestion =
            "⛈️ Thunderstorms are expected. Avoid outdoor travel.";

    }

    else {

        suggestion =
            "🌤️ Check the weather conditions before travelling.";

    }


    travelSuggestion.textContent =
        suggestion;

}


// ===============================
// ERROR MESSAGE
// ===============================

function showError(message) {

    errorMessage.textContent =
        "❌ " + message;

}