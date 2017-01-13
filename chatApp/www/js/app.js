(function(){
  var app = angular.module('starter', ['ionic']);

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/login.html'
      });

      $stateProvider.state('chat', {
          url: '/chat',
          templateUrl: 'templates/chat.html'
      });

      $urlRouterProvider.otherwise('login');

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
