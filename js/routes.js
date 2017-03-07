angular.module('moviecatApp.route', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'tmps/index-tmp.html'
        }).when('/nowplaying', {
            templateUrl: 'tmps/nowplaying-tmp.html',
            controller: 'nowplayingCtrl'
        }).when('/nowplaying/:pageid/:pagesize', {
            templateUrl: 'tmps/nowplaying-tmp.html',
            controller: 'nowplayingCtrl'
        }).when('/later', {
            templateUrl: 'tmps/later-tmp.html',
            controller: 'laterCtrl'
        }).when('/later/:pageid/:pagesize', {
            templateUrl: 'tmps/later-tmp.html',
            controller: 'laterCtrl'
        }).when('/top250', {
            templateUrl: 'tmps/top250-tmp.html',
            controller: 'top250Ctrl'
        }).when('/top250/:pageid/:pagesize', {
            templateUrl: 'tmps/top250-tmp.html',
            controller: 'top250Ctrl'
        }).otherwise({
            redirectTo: '/'
        })
    }]);
