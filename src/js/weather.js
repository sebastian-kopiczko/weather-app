export class Weather{
  constructor(lat, lng){
    this.apiKey = '055a53f5a6b68703fe86456a74f6da17';
    this.lat = lat;
    this.lng = lng;
    this.lang = 'pl';
  }

  // fetch weather from api
  async getWeather(){
    const corsEnableUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${corsEnableUrl}https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.lng}?lang=${this.lang}&units=auto`);
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  }

  // change weather location
  async changeLocation(lat, lng){
    this.lat = lat;
    this.lng = lng;
  }
}
