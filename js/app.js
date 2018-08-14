// init objects
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.latitude, weatherLocation.longitude, weatherLocation.langCode);
const ui = new UserInterface();
// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather());

// weather.changeLocation('52.226050', '21.015136');

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(results)
    ui.displayWeather(results)
  })
  .catch(err => console.log(err));
}

// toggling modal window
document.getElementById('changeLocation-button').addEventListener('click', () => ui.openModal());

document.getElementById('modal').addEventListener('click', (e) => {
  if(e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close') || e.target.id === 'cancel-button'){
    ui.closeModal();
  }
})

document.getElementById('saveNewLocation-button').addEventListener('click', (e) =>{
  const latitude = document.getElementById('latitude-input').value;
  const longitude = document.getElementById('longitude-input').value;
  
  weather.changeLocation(latitude, longitude);
  storage.setLocationData(latitude, longitude);
  getWeather();
  ui.closeModal();
  e.preventDefault();
})