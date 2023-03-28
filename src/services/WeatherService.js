class WeatherService {
    _apiBase = 'https://api.weatherapi.com/v1/current.json?';
    _apiKey = 'key=<API_KEY>';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getCurrentWeather = async (city) => {
        const res = await this.getResource(`${this._apiBase}${this._apiKey}&q=${city}`);
        return this._transformWeatherObject(res);
    }

    _transformWeatherObject = (weatherObj) => {
        return {
            temp_c: weatherObj.current.temp_c,
            name: weatherObj.location.name
        }
    }
}

export default WeatherService