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


$(function($) {
  if ($("#map-canvas").length > 0){
    // load google maps api
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
  }
});

// var url = window.location.href + "/marker.json";

function initialize() {
    
  // var markerApi = function(){
  //   return $.ajax({
  //   type: "GET",
  //   url: url,
  //   dataType: "json"
  //   });
  // }

  var drawMap = markerApi().done(
    function(data){
      // var lat = data["marker"]["latitude"];
      // var lon = data["marker"]["longitude"];
      var coordinates = new google.maps.LatLng(40.7048872, -74.0123737);
      var map;
      var mapOptions = {
      center: coordinates,
      zoom: 15,
      disableDefaultUI: true,
      styles: styles
    };
      
    map = new google.maps.Map(document.getElementById("map-canvas"),
mapOptions);

    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
    });

  });

}