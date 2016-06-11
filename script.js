var app = angular
          .module("myApp",  []);
          app.directive("primeira", function(){
            return {
              template : "<h1>Made by a directive!</h1>"
            };
          });
          app.directive("meuTeste", function(){
            return {
              template : "<h3>Testando</h3>"
            };
          });
          app.directive("meuMapa", function(){
            return {
              template : "<h3>Testando</h3>"
            };
          })
          app.directive('myCustomer', function() {
            return {
              templateUrl: 'index-maps.html'
            };
          });
