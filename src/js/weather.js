import { Storage } from './storage' 
const storage = new Storage();
export class Weather{
  constructor(lat, lng){
    this.apiKey = '055a53f5a6b68703fe86456a74f6da17';
    this.lang = 'pl';
    this.lat = lat || storage.getLocationData().lat;
    this.lng = lng || storage.getLocationData().lng;
  }

  // fetch weather from api
  async getWeather(){
    console.log('loading true')
    const corsEnableUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${corsEnableUrl}https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.lng}?lang=${this.lang}&units=auto`);
    const responseData = await response.json();
    console.log(`getWeather() response:`);
    responseData["units"] = this.getUnits(responseData.flags.units);
    console.log(responseData);
    return responseData;  
  }

  // change weather location
  changeLocation(lat, lng){
    this.lat = lat;
    this.lng = lng;
  }

   getUnits(unitFlag){
    console.log('get units' + unitFlag);
    let units;
    if(unitFlag === "si"){
      units = {
        temperature: 'C',
        speed: 'm/s',
        pressure: 'hPa'
      }
    } else {
      units = {
        temperature: 'F',
        speed: 'mph',
        pressure: 'mbar'
      }
    }
    return units;
  }
}
