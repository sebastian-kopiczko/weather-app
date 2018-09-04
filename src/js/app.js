// materialize
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import '../css/style.css'
//imports
import { GoogleMaps } from './maps' 
import { Storage } from './storage' 
import { Weather } from './weather' 
import { UserInterface } from './ui' 
// use skycons
// const Skycons = require("skycons")(window);

// init objects
const googleMaps = new GoogleMaps();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.latitude, weatherLocation.longitude);
const ui = new UserInterface();

// get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather());

function getWeather(){
  weather.getWeather()
  .then(results => {
    console.log(typeof(storage.getLocationData().address));
    ui.displayResults(results, storage.getLocationData().address)
  })
  .catch(err => console.error(err));
}

document.getElementById('saveNewLocation-button').addEventListener('click', (e) => {
  const place = googleMaps.getData();
  console.log(place);

  weather.changeLocation(place.geometry.lat, place.geometry.lng);
  storage.setLocationData(place.geometry.lat, place.geometry.lng, 'pl', place.address);
  
  getWeather();
  e.preventDefault();
})

function googleMapInit(){
  googleMaps.getCoordinates();
}
window.googleMapInit = googleMapInit;