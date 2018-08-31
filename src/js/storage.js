export class Storage{
  constructor(){
    this.lat;
    this.lng;
    this.langCode;
    this.address;
    this.defaultLat = '54.492976';
    this.defaultLng = '18.543219';
    this.defaultLangCode = 'pl';
    this.defaultAddress = 'Gdynia, Polska'
  }

  getLocationData(){
    if(localStorage.getItem('lat') === null){
      this.lat = this.defaultLat;
    } else {
      this.lat = localStorage.getItem('lat');
    }
    
    if(localStorage.getItem('lng') === null){
      this.lng = this.defaultLng;
    } else {
      this.lng = localStorage.getItem('lng');
    }

    if(localStorage.getItem('langCode') === null){
      this.langCode = this.defaultLangCode;
    } else {
      this.langCode = localStorage.getItem('langCode');
    }

    if(localStorage.getItem('address') === null){
      this.address = this.defaultAddress;
    } else {
      this.address = localStorage.getItem('address');
    }

    return{
      lat: this.lat,
      lng: this.lng,
      langCode: this.langCode,
      address: this.address
    }
  }
  
  setLocationData(lat, lng, langCode, address){
    localStorage.setItem('lat', lat);
    localStorage.setItem('lng', lng);
    localStorage.setItem('langCode', langCode);
    localStorage.setItem('address', address);
  }
}