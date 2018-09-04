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
const Skycons = require("skycons")(window);
// init objects
const googleMaps = new GoogleMaps();
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.latitude, weatherLocation.longitude);
const ui = new UserInterface();

const skycons = new Skycons();
skycons.add(document.getElementById("icon2"), Skycons.PARTLY_CLOUDY_DAY);

// get weather on dom load
// document.addEventListener('DOMContentLoaded', getWeather());

function getWeather(){
  weather.getWeather()  
  .then(results => {
    ui.displayResults(results);
    ui.setHeading(storage.getLocationData().address);
  })
  .catch(err => console.log(err));
}

document.getElementById('saveNewLocation-button').addEventListener('click', (e) => {
  const place = googleMaps.getData();
  console.log(place);
  weather.changeLocation(place.geometry.lat, place.geometry.lng);
  storage.setLocationData(place.geometry.lat, place.geometry.lng, 'pl', place.address);
  getWeather();
  e.preventDefault();

  // const data = {
  //   lat: googleMaps.latitude,
  //   lng: googleMaps.longitude,
  //   langCode: googleMaps.langCode,
  //   locationName: googleMaps.locationName
  // }
  
  // weather.changeLocation(data.lat, data.lng);
  // storage.setLocationData(data.lat, data.lng, data.langCode, data.locationName);

  // getWeather(data.locationName);
  // ui.closeModal();
  // e.preventDefault();
})

function googleMapInit(){
  googleMaps.getCoordinates();
}
window.googleMapInit = googleMapInit;