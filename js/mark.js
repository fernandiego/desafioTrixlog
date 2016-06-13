var app = angular
          .module("myApp",  []);
          app.directive('myMarker', function(leafletData) {
  return {

      link: function (scope, element, attributes) {
        var marker = L.marker([-3.74166, -38.53532]);
        leafletData.markers.push(marker);
      }
    }
  });
