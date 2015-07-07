alert("i'm in map.js")

$(function($) {
  if ($("#map-canvas").length > 0){
    // load google maps api
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
  }
});

var url = window.location.href + "/marker.json";

function initialize() {
  debugger;
    
  var markerApi = function(){
    return $.ajax({
    type: "GET",
    url: url,
    dataType: "json"
    });
  }

  var drawMap = markerApi().done(
    function(data){
      var lat = data["marker"]["latitude"];
      var lon = data["marker"]["longitude"];
      var coordinates = new google.maps.LatLng(lat, lon);
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