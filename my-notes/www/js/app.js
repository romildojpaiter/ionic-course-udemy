(function(){

    var app = angular.module('starter', ['ionic']);

    var notes = [
        {
            id: '1',
            title: 'First Note',
            description: 'This is first note'
        },
        {
            id: '2',
            title: 'Second Note',
            description: 'This is second note'
        }
    ];

    function getNote(noteId) {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id === noteId) {
                return notes[i];
            }
        }
        return undefined;
    }

    function updateNote(note) {
        for (var i = 0; i < notes.length; i++) {
            if (notes[i].id === note.id) {
                notes[i] = note;
                return;
            }
        }
    }

    function createNote(note) {
        notes.push(note);
    }

    app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('list', {
            url: '/list',
            templateUrl: 'templates/list.html'
        });
        $stateProvider.state('edit', {
            url: '/edit/:noteId',
            templateUrl: 'templates/edit.html',
            controller: 'EditCtrl'
        });
        $stateProvider.state('add', {
            url: '/add',
            templateUrl: 'templates/edit.html',
            controller: 'AddCtrl'
        });
        $urlRouterProvider.otherwise('/list');
    });

    app.controller('AddCtrl', function($scope, $state) {
        $scope.note = {
            id: new Date().getTime().toString(),
            title: '',
            description: ''
        };

        $scope.save = function() {
            createNote($scope.note);
            $state.go('list');
        };
    });

    app.controller('EditCtrl', function($scope, $state) {
        $scope.note = angular.copy(getNote($state.params.noteId));

        $scope.save = function() {
            updateNote($scope.note);
            $state.go('list');
        };
    });

    app.controller('ListCtrl', function($scope) {
        $scope.notes = notes;
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
