// Open Weather Map API

const apiKey = "30a520c8cc4f760e0125720459cea177";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBar = document.querySelector(".searchBar input")
const searchBtn = document.querySelector(".searchBar button")
const weatherIcon = document.querySelector(".weatherIcon");


checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png"
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
})

searchBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBar.value);
    }
});
