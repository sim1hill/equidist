// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree ../../../vendor/assets/javascripts/.
//= require_tree .

    





 function initialize() {
    var latitude;
    var longitude;
    var latlng;
    var mapOptions;
    var map;

    function getLocation() {
        navigator.geolocation.getCurrentPosition(showPosition);
   
    }
    getLocation();

    function showPosition(position) {
      latitude = position["coords"]["latitude"];
        longitude = position["coords"]["longitude"];
        // latitude = Number(position["coords"]["latitude"].toFixed(2));
        // longitude = Number(position["coords"]["longitude"].toFixed(2));
      latlng = new google.maps.LatLng(latitude, longitude);
      mapOptions = {
          zoom: 8,
          center: latlng,
  };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
}

  
  

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
      '&signed_in=true&callback=initialize';
  document.body.appendChild(script);
}

window.onload = loadScript;

// $(function($) {
//   if ($("#map-canvas").length > 0){
//     // load google maps api
//     var script = document.createElement('script');
//     script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
//     document.body.appendChild(script);
//   }
// });





