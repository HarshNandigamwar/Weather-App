const apiKey = "Your api key";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      document.body.style.backgroundImage = "url('./images/Cloud.jpg')";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
      document.body.style.backgroundImage = "url('./images/Clear.jpg')";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
      document.body.style.backgroundImage = "url('./images/Rain.jpg')";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
      document.body.style.backgroundImage = "url('./images/Drizzle.jpg')";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
      document.body.style.backgroundImage = "url('./images/Mist.jpg')";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
      document.body.style.backgroundImage = "url('./images/Snow.jpg')";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
