async function getWeather(){

let city = document.getElementById("city").value;

let url = "https://api.open-meteo.com/v1/forecast?latitude=17.3850&longitude=78.4867&current_weather=true";

let response = await fetch(url);

let data = await response.json();

let temp = data.current_weather.temperature;
let wind = data.current_weather.windspeed;

document.getElementById("weather").innerHTML =
"Temperature: " + temp + "°C <br> Wind Speed: " + wind + " km/h";

}