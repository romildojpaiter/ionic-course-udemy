(function(){
    var app = angular.module('app', ['ionic']);

    app.config(function($stateProvider, $urlRouterProvider){

        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'templates/home.html'
        });
        $stateProvider.state('details', {
            url: '/details',
            templateUrl: 'templates/details.html'
        });
        $stateProvider.state('settings', {
            url: '/settings',
            templateUrl: 'templates/settings.html'
        });

        $urlRouterProvider.otherwise('/home');
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
