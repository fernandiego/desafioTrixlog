angular.module("ngLeaflet", []);

angular.module("ngLeaflet").directive('myMap',  function(leafletData) {
  return {

    link: function (scope, element, attributes) {
      leafletData.map = L.map('map', {
        'center': [-3.73631, -38.54373],
        'zoom': 14
      });
      var tileLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        subdomains: ['a','b','c','d'],
        mapId: 'rakshak.l937n12c',
        token: 'pk.eyJ1IjoicmFrc2hhayIsImEiOiJ5cHhqeHlRIn0.Vi87VjI1cKbl1lhOn95Lpw'
      });

      tileLayer.addTo(leafletData.map);
      leafletData.map.whenReady(  function(){
        for (var i = 0; i < leafletData.poli.length; i++) {
          leafletData.poli[i].addTo(leafletData.map);
        }
        for (var i = 0; i < leafletData.markers.length; i++) {
          leafletData.markers[i].addTo(leafletData.map);
        }
        //  firstpolyline.addTo(leafletData.map);
      });

    }
  };
});


angular.module("ngLeaflet").directive('myMarker', function(leafletData) {
  return {

    link: function (scope, element, attributes) {
      var marker = L.marker([-3.74166, -38.53532]);
      leafletData.markers.push(marker);
    }
  }
});

angular.module("ngLeaflet").directive('myPoli', function(leafletData) {
  return {

    link: function (scope, element, attributes) {
      var pointA = new L.LatLng(-3.74166, -38.53532);
      var pointB = new L.LatLng(-3.74144, -38.53581);
      var pointC = new L.LatLng(-3.74313, -38.53656);
      var pointD = new L.LatLng(-3.7383, -38.54225);
      var pointE = new L.LatLng(-3.73733, -38.54319);
      var pointF = new L.LatLng(-3.73741, -38.54472);
      var pointG = new L.LatLng(-3.74194, -38.56645);
      var pointH = new L.LatLng(-3.74112, -38.56727);
      var pointI = new L.LatLng(-3.73892, -38.56889);
      var pointJ = new L.LatLng(-3.7386, -38.56926);

      var pointList = [pointA, pointB, pointC,
        pointD, pointE, pointF,
        pointG, pointH, pointI,
        pointJ];

        var firstpolyline = new L.Polyline(pointList, {
          color: 'blue',
          weight: 3,
          opacity: 0.5,
          smoothFactor: 1

        });
        leafletData.poli.push(firstpolyline);
      }
    };
});