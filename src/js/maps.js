export class GoogleMaps{
  constructor(){
    this.locationInput = document.querySelector('#location-field');
    this.addressData;
    this.geometryData;
  }

  getCoordinates(){
    const autocomplete = new google.maps.places.Autocomplete((this.locationInput), {types: ['(cities)']});

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      console.log(place);
      this.geometryData = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      this.addressData = place.formatted_address;
    });

    return {
      place: this.place
    }
  }
  getData(){
    return {
      address: this.addressData,
      geometry: this.geometryData
    }
  }
}