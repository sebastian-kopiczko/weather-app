class Storage{
  constructor(){
    this.latitude;
    this.longitude;
    // this.langCode;
    this.defaultLatitude = '54.492976';
    this.defaultLongitude = '18.543219';
    // this.defaultLangCode = 'en';
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

    // if(localStorage.getItem('langCode') === null){
    //   this.langCode = this.defaultLangCode;
    // } else {
    //   this.langCode = localStorage.getItem('langCode');
    // }

    return{
      latitude: this.latitude,
      longitude: this.longitude
      // langCode: this.langCode
    }
  }

  setLocationData(latitude, longitude){
    localStorage.setItem('latitude', latitude);
    localStorage.setItem('longitude', longitude);
    // localStorage.setItem('langCode', langCode);
  }
}