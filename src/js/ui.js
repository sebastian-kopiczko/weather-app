export class UserInterface {
  constructor() {
    this.units = {
      temperature: '',
      speed: '',
      pressure: ''
    }

    this.locationInput = document.getElementById('location-field');
    this.longitude = document.getElementById('location-lng');
    this.latitude = document.getElementById('location-lat');

    this.locationName = document.getElementById('weather-locationName');
    this.temp = document.getElementById('weather-temp');
    this.desc = document.getElementById('weather-desc');
    this.windSpeed = document.getElementById('weather-windSpeed');
    this.pressure = document.getElementById('weather-pressure');
    this.humidity = document.getElementById('weather-humidity');
  }
  setUnits(unitFlag) {
    if (unitFlag === 'si') {
      this.units = {
        temperature: "C",
        speed: "m/s",
        pressure: "hPa"
      }
    } else {
      this.units = {
        temperature: "F",
        speed: "mph",
        pressure: "mbar"
      }
    }
  }
  displayResults(address, weatherData) {
    this.locationName.textContent = address;
    this.temp.innerHTML = `${weatherData.currently.temperature} &deg;${this.units.temperature}`;
    this.desc.textContent = weatherData.currently.desc;

    this.latitude.textContent = `${weatherData.latitude.toFixed(4)}`;
    this.longitude.textContent = weatherData.longitude.toFixed(4);
    
    this.windSpeed.textContent += `${weatherData.currently.windSpeed} ${weatherData.speed}`;
    this.pressure.textContent += `${weatherData.currently.pressure} ${this.units.pressure}`;
    this.humidity.textContent = ` ${weatherData.currently.humidity * 100}%`;
  }
  
  clearInput() {
    this.locationInput.value = '';
  }
}