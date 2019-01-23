class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.clouds = document.getElementById('w-clouds');
        this.description = document.getElementById('w-desciption');
        this.sunset = document.getElementById('w-sunset');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp + "℃";
       
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/s`;
        this.clouds.textContent = `Cloudiness: ${weather.clouds.all} %`;
        this.description.textContent = `: ${weather.description}`;


    }
}