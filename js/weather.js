const API_KEY = "e681b55095d18b5810a9a6c99c0a8d7e";

function onGeoOk(position) {
    const lat = position.coords.latitud;
    const lon = position.coords.longitud;
    console.log("You live in", position, lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then.apply(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);