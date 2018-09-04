export class UserInterface {
  constructor() {
    this.units = {
      temperature: '',
      speed: '',
      pressure: ''
    }

    this.locationInput = document.getElementById('location-field');
    this.latitude = document.getElementById('location-lat');
    this.longitude = document.getElementById('location-lng');

    this.locationName = document.getElementById('weather-locationName');
    this.temp = document.getElementById('weather-temp');
    this.desc = document.getElementById('weather-desc');
    this.windSpeed = document.getElementById('weather-windSpeed');
    this.pressure = document.getElementById('weather-pressure');
    this.humidity = document.getElementById('weather-humidity');
  }
  displayResults(weatherData, address) {
    console.log(address);
    console.log(weatherData);
    this.locationName.textContent = address;
    this.temp.innerHTML = `${weatherData.currently.temperature} &deg;${weatherData.units.temperature}`;
    this.desc.textContent = weatherData.currently.desc;

    this.latitude.textContent = `${weatherData.latitude.toFixed(4)}`;
    this.longitude.textContent = weatherData.longitude.toFixed(4);
    
    this.windSpeed.textContent += `${weatherData.currently.windSpeed} ${weatherData.units.speed}}`;
    this.pressure.textContent += `${weatherData.currently.pressure} ${weatherData.units.pressure}`;
    this.humidity.textContent = ` ${weatherData.currently.humidity * 100}%`;
  }

  clearInput() {
    this.locationInput.value = '';
  }
}