var app = angular
          .module("myApp",  []);
          app.directive('myMap', [ function() {
            return {
              replace: true,
              template: '<div></div>',
              link: function (scope, element, attributes) {
                var map = L.map('map', {
                  'center': [-3.73631, -38.54373],
                  'zoom': 14
                });
                var tileLayer = L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mapId}/{z}/{x}/{y}.png?access_token={token}', {
                  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                  subdomains: ['a','b','c','d'],
                  mapId: 'rakshak.l937n12c',
                  token: 'pk.eyJ1IjoicmFrc2hhayIsImEiOiJ5cHhqeHlRIn0.Vi87VjI1cKbl1lhOn95Lpw'
                });

                tileLayer.addTo(map);

              }
            };
          }
        ]);
        app.directive('myMarker', [ function() {
          return {
              replace: true,
              template: '<div></div>',
              link: function (scope, element, attributes) {
                
              }
            };
          }
        ]);
