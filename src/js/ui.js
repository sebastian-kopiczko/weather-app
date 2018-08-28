export class UserInterface{
  constructor(){
    this.locationName = document.getElementById('weather-locationName');
    this.latitude = document.getElementById('location-lat');
    this.longitude = document.getElementById('location-lng');
    this.summary = document.getElementById('weather-summary');
    this.temp = document.getElementById('weather-temp');
    // this.icon = document.getElementById('weather-icon');
    this.pressure = document.getElementById('weather-pressure');
    this.humidity = document.getElementById('weather-humidity');
    this.feelsLike = document.getElementById('weather-feelsLike');
    this.windSpeed = document.getElementById('weather-windSpeed');
    
    this.locationInput = document.getElementById('location-input');
    this.modal = document.getElementById('modal');
  }

  displayWeather(weather){
    this.latitude.textContent = weather.latitude;
    this.longitude.textContent = weather.longitude;
    this.summary.textContent = weather.currently.summary;
    this.temp.innerHTML = `${weather.currently.temperature} &deg;C`;
    this.pressure.textContent = `Ciśnienie: ${weather.currently.pressure} hPa`;
    this.humidity.textContent = `Wilgotność: ${weather.currently.humidity * 100} %`;
    this.feelsLike.innerHTML = `Temp. odczuwalna: ${weather.currently.apparentTemperature} &deg;C`;
    this.windSpeed.textContent = `Prędkość wiatru: ${weather.currently.windSpeed} m/s`;
  }

  setHeading(address){
    this.locationName.textContent = address;
  }

  clearInput(){
    this.locationInput.value = '';
  }
  openModal(){
    this.modal.classList.add('is-active');
  }
  closeModal(){
    this.modal.classList.remove('is-active');
  }
}