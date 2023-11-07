import { LitElement, html } from "lit";

class WeatherInfo extends LitElement {
  static properties = {
    weatherData: { type: Object },
  };

  constructor() {
    super();
    this.weatherData = {}; // Default to an empty object
  }

  render() {
    return html`
      <div class="weather-info">
        <h1>hello there</h1>
        <div class="weather-details">
          <p>Temperature: ${this.weatherData.main.temp}°C</p>
          <p>Humidity: ${this.weatherData.main.humidity}%</p>
          <p>Wind Speed: ${this.weatherData.wind.speed} m/s</p>
          <p>Conditions: ${this.weatherData.weather[0].description}</p>
        </div>
        <div class="air-quality">
          <p>
            Air Quality Index (AQI): ${this.weatherData.Air.list[0].main.aqi}
          </p>
          <p>CO: ${this.weatherData.Air.list[0].components.co} µg/m³</p>
          <p>NO2: ${this.weatherData.Air.list[0].components.no2} µg/m³</p>
          <p>PM2.5: ${this.weatherData.Air.list[0].components.pm2_5} µg/m³</p>
        </div>
      </div>
    `;
  }
}

customElements.define("weather-info", WeatherInfo);
