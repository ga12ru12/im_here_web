'use strict';

import React, {MapView, Component} from 'React';

var map = null;

export default class Map extends Component{
  initMap() {
    var self = this;
    var myLatLng = {lat: 16.075371, lng: 108.222260};
    var mapOptions = {
      zoom: 14,
      // draggable: false,
      zoomControl: false,
      mapTypeControl: false,
      overviewMapControl: false,
      panControl: false,
      streetViewControl: false,
      center: myLatLng
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!',
      icon: './img/logo_short.png'
    });

    var contentString = '<div id="content">'+
        '<div class="avatar-div">'+
          '<img src="./img/default_avatar.png">'
        '</div>'+
        '<div class="info-div">'+
          '<div class="header-div">'+
            'Name: '+
          '</div>'
          '<div class="content-div">'+
            'Ten la gi'+
          '</div>'+
          '<div class="header-div">'+
            'Message: '+
          '</div>'
          '<div class="content-div">'+
            'Message gi'+
          '</div>'
        '</div>'
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    // Try HTML5 geolocation.
    //if (navigator.geolocation) {
    //  navigator.geolocation.getCurrentPosition(function(position) {
    //    var pos = {
    //      lat: position.coords.latitude,
    //      lng: position.coords.longitude
    //    };
    //
    //    infoWindow.setPosition(pos);
    //    infoWindow.setContent('Location found.');
    //    map.setCenter(pos);
    //  }, function() {
    //    self.handleLocationError(true, infoWindow, map.getCenter());
    //  });
    //} else {
    //  // Browser doesn't support Geolocation
    //  self.handleLocationError(false, infoWindow, map.getCenter());
    //}
  }

  //handleLocationError(browserHasGeolocation, infoWindow, pos) {
  //  infoWindow.setPosition(pos);
  //  infoWindow.setContent(browserHasGeolocation ?
  //    'Error: The Geolocation service failed.' :
  //    'Error: Your browser doesn\'t support geolocation.');
  //}

  componentDidMount(){
    this.initMap();
  }

  render(){
    return (
      <div id="map"></div>
    );
  }
}
