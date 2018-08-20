class Storage{
  constructor(){
    this.latitude;
    this.longitude;
    this.langCode;
    this.locationName;
    this.defaultLatitude = '54.492976';
    this.defaultLongitude = '18.543219';
    this.defaultLangCode = 'pl';
    this.defaultLocationName = 'Gdynia, Polska'
  }

  getLocationData(){
    if(localStorage.getItem('latitude') === null){
      this.latitude = this.defaultLatitude;
    } else {
      this.latitude = localStorage.getItem('latitude');
    }
    
    if(localStorage.getItem('longitude') === null){
      this.longitude = this.defaultLongitude;
    } else {
      this.longitude = localStorage.getItem('longitude');
    }

    if(localStorage.getItem('langCode') === null){
      this.langCode = this.defaultLangCode;
    } else {
      this.langCode = localStorage.getItem('langCode');
    }

    if(localStorage.getItem('locationName') === null){
      this.locationName = this.defaultLocationName;
    } else {
      this.locationName = localStorage.getItem('locationName');
    }

    return{
      latitude: this.latitude,
      longitude: this.longitude,
      langCode: this.langCode,
      locationName: this.locationName
    }
  }
  
  setLocationData(latitude, longitude, langCode, locationName){
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
    localStorage.setItem('langCode', langCode);
    localStorage.setItem('locationName', locationName);
  }
}