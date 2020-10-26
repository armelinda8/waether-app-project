let h1 = document.querySelector("h1");
let h5 = document.querySelector("h5");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let hours = now.getHours();
let minutes = now.getUTCMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h1.innerHTML = `${hours}:${minutes}`;
h5.innerHTML = `${day}`;

function displayTemperature(response) {
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
}
function searchCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  let searchCity = document.querySelector("#city");
  searchCity.innerHTML = `${input.value}`;
  search(input.value);
}
function search(city) {
  let apiKey = "b21a10c27438eae6965d622679beaa55";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}
let searchText = document.querySelector("#search-form");
searchText.addEventListener("submit", searchCity);
