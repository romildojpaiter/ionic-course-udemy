(function(){

  var app = angular.module('app', ['ionic', 'ngCordova']);

  app.controller('LocationCtrl', function($scope, $cordovaGeolocation, $ionicPlatform) {

    function showMap(coords) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: coords.latitude, lng: coords.longitude},
        zoom: 8
      });
    }

    $ionicPlatform.ready(function(){
      var posOptions = {timeout: 10000, enableHighAccuracy: true};
      $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function (position) {
          $scope.coords = position.coords;
          showMap(position.coords);
          // var lat  = position.coords.latitude
          // var long = position.coords.longitude
      }, function(err) {
        // error
        console.log('getCurrentPosition error: ' + angular.toJson(err));
      });
    });

  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

}());
