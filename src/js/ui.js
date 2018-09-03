// import { Weather } from './weather';
// const weather = new Weather();
export class UserInterface{
  constructor(){
    this.locationName = document.getElementById('weather-locationName');
    this.latitude = document.getElementById('location-lat');
    this.longitude = document.getElementById('location-lng');
    this.summary = document.getElementById('weather-summary');
    this.temp = document.getElementById('weather-temp');
    this.pressure = document.getElementById('weather-pressure');
    this.humidity = document.getElementById('weather-humidity');
    this.windSpeed = document.getElementById('weather-windSpeed');
    this.tempUnits;

    this.locationInput = document.getElementById('location-input');
  }

  displayResults(response){
    this.latitude.textContent = response.latitude.toFixed(4);
    this.longitude.textContent = response.longitude.toFixed(4);
    this.summary.textContent = response.currently.summary;
    this.temp.innerHTML = `${response.currently.temperature} &deg;${this.tempUnits}`;
    this.pressure.textContent = `Ciśnienie: ${response.currently.pressure} hPa`;
    this.humidity.textContent = `Wilgotność: ${response.currently.humidity * 100} %`;
    this.windSpeed.textContent = `Prędkość wiatru: ${response.currently.windSpeed} m/s`;
  }

  setHeading(address){
    this.locationName.textContent = address;
  }

  clearInput(){
    this.locationInput.value = '';
  }
}