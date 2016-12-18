var app = angular.module('starter', ['ionic'])

app.controller('ListCtrl', function($scope) {

    $scope.notes = [
        {
            title: 'First Note',
            description: 'This is first note'
        },
        {
            title: 'Second Note',
            description: 'This is second note'
        }
    ];
});

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('list', {
        url: '/list',
        templateUrl: 'templates/list.html'
    });

    $stateProvider.state('edit', {
        url: '/edit',
        templateUrl: 'templates/edit.html'
    });

    $urlRouterProvider.otherwise('/list');

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
