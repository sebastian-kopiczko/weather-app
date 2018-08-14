class Weather{
  constructor(lat, long, lang){
    this.apiKey = '';
    this.lat = lat;
    this.long = long;
    this.lang = 'pl';
  }

  // fetch weather from api
  async getWeather(){
    const corsEnableUrl = 'https://cors-anywhere.herokuapp.com/';
    const response = await fetch(`${corsEnableUrl}https://api.darksky.net/forecast/${this.apiKey}/${this.lat},${this.long}?lang=${this.lang}&units=auto`);
    const responseData = await response.json();
    return responseData;
  }

  // change weather location
  async changeLocation(lat, long){
    this.lat = lat;
    this.long = long;
    // this.lang = lang;
  }
}
