export class GoogleMaps{
  constructor(){
    this.latitude;
    this.longitude;
    this.langCode;
    this.locationName;
    this.locationInput = document.querySelector('.location-input input');
  }

  getCoordinates(){
    const searchBox = new google.maps.places.SearchBox(this.locationInput);
  
    searchBox.addListener('places_changed', () => {
      const data = searchBox.getPlaces()[0];
      // console.log(data);
      this.latitude = data.geometry.location.lat();
      this.longitude = data.geometry.location.lng();
      this.locationName = data.formatted_address;
      this.langCode = data.address_components[data.address_components.length - 2].short_name.toLowerCase();
    })

    return {
      latitude: this.latitude,
      longitude: this.longitude,
      langCode: this.langCode,
      locationName: this.locationName
    }
  }
}