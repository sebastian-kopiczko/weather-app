class UserInterface{
  constructor(){
    this.location = document.getElementById('weather-location');
    this.summary = document.getElementById('weather-summary');
    this.temp = document.getElementById('weather-temp');
    // this.icon = document.getElementById('weather-icon');
    this.pressure = document.getElementById('weather-pressure');
    this.humidity = document.getElementById('weather-humidity');
    this.feelsLike = document.getElementById('weather-feelsLike');
    this.windSpeed = document.getElementById('weather-windSpeed');
    
    this.modal = document.getElementById('modal');
  }

  displayWeather(weather){
    this.location.textContent = `${weather.latitude} ${weather.longitude}`;
    this.summary.textContent = weather.currently.summary;
    this.temp.innerHTML = `${weather.currently.temperature} &deg;C`;
    this.pressure.textContent = `Ciśnienie: ${weather.currently.pressure} hPa`;
    this.humidity.textContent = `Wilgotność: ${weather.currently.humidity * 100} %`;
    this.feelsLike.innerHTML = `Temp. odczuwalna: ${weather.currently.apparentTemperature} &deg;C`;
    this.windSpeed.textContent = `Prędkość wiatru: ${weather.currently.windSpeed} m/s`;
  }
  
  // getUnits(weather){}

  openModal(){
    this.modal.classList.add('is-active');
  }
  closeModal(){
    this.modal.classList.remove('is-active');
  }
}