angular.module('routeApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/home', {
           templateUrl: 'views/home.html',
         }).when('/kirby', {
           templateUrl: 'views/kirby.html',
         }).when('/captainfalcon', {
           templateUrl: 'views/captainfalcon.html',
         }).when('/sheik', {
           templateUrl: 'views/sheik.html',
         }).otherwise({
           redirectTo: '/home',
         });

         // lets us use normal looking links
         // i.e. /home
         // remember, to use this, need to set base href in html
         $locationProvider.html5Mode(true);
       });
