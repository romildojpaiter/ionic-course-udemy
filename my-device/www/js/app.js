(function() {

  var app = angular.module('app', ['ionic']);

  app.controller('DeviceCtrl', function($scope, $cordovaDevice, $ionicPlatform) {

    $ionicPlatform.ready('deviceready', function($scope, $cordovaDevice) {
      $scope.$apply(function(){
        $scope.device = $cordovaDevice.getDevice();
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
