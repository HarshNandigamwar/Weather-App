const apiKey = "";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//Getting HTML element.
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

// const btn = document.querySelector(".btn");

// function bt(){
//   console.log("hello");
  
// }

// btn.addEventListener("click", () => {
//   bt();
// });


// getting data from openweathermap url.
async function checkweather(city) {

  // Check device is offline or not.
const Net = navigator.onLine;
if (Net) {
  document.querySelector(".net").innerHTML = "online";
  document.querySelector(".net").style.backgroundColor = "Green"
  document.querySelector(".net").style.display = "none";
  document.querySelector(".card").style.display = "block";
  document.querySelector(".net").style.display = "none";
} else {
  document.querySelector(".card").style.display = "none";
  document.querySelector(".net").style.backgroundColor = "red";
  document.querySelector(".net").style.display = "block";
  document.querySelector(".net").innerHTML = "Sorry you are offline 🛜 plz reload page";
}


  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    // Check city name is correct or not.
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.body.style.backgroundImage = "url('./images/bg1.jpg')";
  } // Updating Weather Data.
  else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".feels").innerHTML =
      Math.round(data.main.feels_like) + "°";
    //Change weather image.
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
      document.body.style.backgroundImage = "url('./images/Cloud.jpg')";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear-gif.gif";
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
//Search Button.
searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
