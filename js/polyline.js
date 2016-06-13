var app = angular
          .module("myApp",  []);
          app.directive('myPoli', function(leafletData) {
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
  }
);
