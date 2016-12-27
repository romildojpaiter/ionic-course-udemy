
(function() {

  var app = angular.module('app', ['ionic']);

  app.controller('AppCtrl', function($scope, $timeout) {

    function add(x, y) {
      return $timeout(function() {
        return x + y;
      }, 100);
    }

    var startTime = Date.now();
    add(5, 2)
      .then(function(result) {
        return add(result, 3);
      })
      .then(function(result) {
        $scope.result = result;
        $scope.elapsedTime = Date.now() - startTime;
      });

  });


  // app.run(function($ionicPlatform) {
  //   $ionicPlatform.ready(function() {
  //     if(window.cordova && window.cordova.plugins.Keyboard) {
  //       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  //       cordova.plugins.Keyboard.disableScroll(true);
  //     }
  //     if(window.StatusBar) {
  //       StatusBar.styleDefault();
  //     }
  //   });
  // });

}());
