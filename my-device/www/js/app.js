(function() {

  var app = angular.module('app', ['ionic']);

  app.controller('DeviceCtrl', function() {

    document.addEventListener('deviceready', function() {
      console.log('device is ' + angular.toJson(device));
      $scope.$apply(function(){
        $scope.device = device;
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
