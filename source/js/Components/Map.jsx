'use strict';

import React, {MapView, Component} from 'React';

var map = null;

export default class Map extends Component{
  initMap() {
    var self = this;
    var mapOptions = {
      zoom: 2,
      // draggable: false,
      zoomControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      panControl: false,
      streetViewControl: false,
      center: new google.maps.LatLng(0, 0)
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        self.handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      self.handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }

  componentDidMount(){
    this.initMap();
  }

  render(){
    return (
      <div id="map"></div>
    );
  }
}
