function searchWeather() {
    const apiURL = `https://pro.openweathermap.org/data/2.5/weather?q=karachi&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`;
    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {

            console.log(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}
// searchWeather();
let cities = ["Karachi", "Multan", "Larkana", "Hyderabad", "Medina"];
// let city = document.getElementById("city").children[1];
let showOtherCitiesTable = document.getElementById("showOtherCities").children[1];
let showMultpleWeatgers = () => {
    cities.forEach(e => fetch(`https://pro.openweathermap.org/data/2.5/weather?q=${e}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            console.log(data);
            // console.log('Weather Data for', data.name);
            // console.log('Temperature:', data.main.temp, '°C');
            // console.log('Weather Description:', data.weather[0].description);
            // city.innerHTML+=`<h1>${Data.name} </h1>`
            showOtherCitiesTable.innerHTML += `<tr>
                <th scope="row" class="text-start">${data.name}</th>
                <td>${data.main.feels_like}</td>
                <td>${data.main.humidity}</td>
                <td>${data.main.temp_max}</td>
                <td>${data.main.temp_min}</td>
                <td>${data.sys.sunrise}</td>
                <td>${data.sys.sunset}</td>
                <td>${data.main.temp}</td>
                <td>${data.wind.deg}</td>
                <td>${data.wind.speed}</td>
            </tr>`
        })
        .catch(error => {
            console.error('Fetch error:', error);
        })
    );
}
showMultpleWeatgers();




function displayWeatherData(data) {
    // Display the weather data for the entered city
    console.log('Weather Data for', data.name);
    console.log('Temperature:', data.main.temp, '°C');
    console.log('Weather Description:', data.weather[0].description);
    // You can add more display elements or customize the output as needed.
}








let city = document.getElementById("srchCity");

let showCityName = () => {

    fetch(`https://pro.openweathermap.org/data/2.5/weather?q=${city.value}&appid=3500aa8ab775cb0cb97ead2b9fc41866&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then(data => {
            document.getElementById("city").innerHTML = "Weather info of " + data.name;
            document.getElementById("temp").innerHTML = "<b>Temperature</b> " + data.main.temp + "<small class='text-muted fw-light'> °C</small>";
            document.getElementById("feelslike").innerHTML = "<b>Feels Like</b> " + data.main.feels_like + "<small class='text-muted fw-light'> °C</small>";
            document.getElementById("humidity").innerHTML = "<b>Humidity</b> " + data.main.humidity + "<small class='text-muted fw-light'> g.m-3</small>";
            document.getElementById("min-temp").innerHTML = "<b>Min-Temp</b> " + data.main.temp_min + "<small class='text-muted fw-light'> °C</small>";
            document.getElementById("max-temp").innerHTML = "<b>Max-Temp</b> " + data.main.temp_max + "<small class='text-muted fw-light'> °C</small>";
            document.getElementById("weather").innerHTML = "<b>Weather</b> " + data.weather[0].main;
            console.log(data);
            // console.log('Weather Data for', data.name);
            // console.log('Temperature:', data.main.temp, '°C');
            // console.log('Weather Description:', data.weather[0].description);
            // city.innerHTML+=`<h1>${Data.name} </h1>`


            function updateColor(weatherCondition) {
                const weatherContainer = document.getElementById("main");
                const weatherIcon = document.getElementById("weatherIcon");

                switch (weatherCondition) {
                    case "Clear":
                        //   weatherContainer.style.backgroundColor = "#87CEEB"; // Light Blue for clear skies and smoke
                        weatherIcon.className = "wi wi-day-sunny"; // Sunny icon
                        weatherContainer.style.backgroundImage = "url('/images/clear.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;

                    case "Smoke":
                        //   weatherContainer.style.backgroundColor = "#87CEEB"; // Light Blue for clear skies and smoke
                        weatherIcon.className = "wi wi-day-sunny"; // Sunny icon
                        weatherContainer.style.backgroundImage = "url('/images/smoky.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    case "Clouds":
                        //   weatherContainer.style.backgroundColor = "#CCCCCC"; // Light Gray for clouds
                        weatherIcon.className = "wi wi-cloudy"; // Cloudy icon
                        weatherContainer.style.backgroundImage = "url('./images/cloudy.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    case "Rain":
                        //   weatherContainer.style.backgroundColor = "#4682B4"; // Steel Blue for rain
                        weatherIcon.className = "wi wi-rain"; // Rain icon
                        weatherContainer.style.backgroundImage = "url('./images/rain.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    case "Snow":
                        //   weatherContainer.style.backgroundColor = "#FFFFFF"; // White for snow
                        weatherIcon.className = "wi wi-snow"; // Snow icon
                        weatherContainer.style.backgroundImage = "url('./images/snow.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    case "Fog":
                    case "Mist":
                        //   weatherContainer.style.backgroundColor = "#B0C4DE"; // Light Steel Blue for fog and mist
                        weatherIcon.className = "wi wi-fog"; // Fog icon
                        weatherContainer.style.backgroundImage = "url('./images/fog.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    case "Haze":
                        //   weatherContainer.style.backgroundColor = "#F0E68C"; // Khaki for haze
                        weatherIcon.className = "wi wi-day-haze"; // Haze icon
                        weatherContainer.style.backgroundImage = "url('./images/haze.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    case "Thunderstorm":
                        //   weatherContainer.style.backgroundColor = "#8B0000"; // Dark Red for thunderstorms
                        weatherIcon.className = "wi wi-thunderstorm"; // Thunderstorm icon
                        weatherContainer.style.backgroundImage = "url('./images/thunder.jpg')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                    default:
                        //   weatherContainer.style.backgroundColor = "#FFFFFF"; // Default to white for unknown conditions
                        weatherIcon.className = "wi wi-na"; // Default icon for unknown conditions
                        weatherContainer.style.backgroundImage = "url('./images/cloudy')"
                        weatherContainer.style.backgroundRepeat = "no-repeat";
                        weatherContainer.style.backgroundAttachment = "fixed";
                        weatherContainer.style.backgroundSize = "cover";
                        break;
                }
            }

            updateColor(data.weather[0].main);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        })

}
// showCityName();

