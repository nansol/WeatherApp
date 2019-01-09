class Weather {
    constructor(city){
        this.apiKey = '871f423b3e84cd9f55df405c88cee62d';
        this.city = city;
    }

    async getWeather(){
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}&units=metric`)
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city){
        this.city = city;
    }






}