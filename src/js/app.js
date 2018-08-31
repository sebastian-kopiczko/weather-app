// materialize
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

//imports
import { GoogleMaps } from './maps' 
import { Storage } from './storage' 
import { Weather } from './weather' 
import { UserInterface } from './ui' 

// init objects
const googleMaps = new GoogleMaps();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.latitude, weatherLocation.longitude);
const ui = new UserInterface();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather());

function getWeather(address){
  weather.getWeather()
  .then(results => {
    ui.displayWeather(results);
    ui.setHeading(address);
  })
  .catch(err => console.log(err));
}

document.getElementById('changeLocation-button').addEventListener('click', () => {
  ui.clearInput();
  ui.openModal()
});

document.getElementById('modal').addEventListener('click', (e) => {
  if(e.target.classList.contains('modal-background') || e.target.classList.contains('modal-close') || e.target.id === 'cancel-button'){
    ui.closeModal();
  }
})

document.getElementById('saveNewLocation-button').addEventListener('click', (e) => {
  const data = {
    lat: googleMaps.latitude,
    lng: googleMaps.longitude,
    langCode: googleMaps.langCode,
    locationName: googleMaps.locationName
  }
  
  weather.changeLocation(data.lat, data.lng);
  storage.setLocationData(data.lat, data.lng, data.langCode, data.locationName);

  getWeather(data.locationName);
  ui.closeModal();
  e.preventDefault();
})

function googleMapInit(){
  googleMaps.getCoordinates();
}
window.googleMapInit = googleMapInit;