class Weather{
    constructor(){
        this.key = '5d5e03289ececf0173f767c2848e9729';
    }

    // Get Current Position
    getCoordinates(){
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }

    // Fetch Weather from API
    async getWeather(){
        const position = await this.getCoordinates();
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;

        const geoResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.key}&units=metric`);
        const geoResponseDate = await geoResponse.json();
        return geoResponseDate;
    }
}