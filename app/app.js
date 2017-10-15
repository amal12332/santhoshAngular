'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
   'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');
  // $routeProvider.otherwise({redirectTo: '/view1'});
}])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'pages/view1/view1.html',
    controller: 'View1Ctrl'
  }).when('/view2', {
    templateUrl: 'pages/view2/view2.html',
    controller: 'View2Ctrl'
  }).when('/dashboard', {
    templateUrl: 'pages/dashboard/dashboard.html',
    controller: 'DashboardController'
  }).when('/forms', {
    templateUrl: 'pages/forms/form.html',
    controller: 'FormController'
  }).when('/booking', {
    templateUrl: 'pages/booking/booking.html',
    controller: 'BookingController'
  }).when('/pickupallocation', {
    templateUrl: 'pages/pickupallocation/pickupallocation.html',
    controller: 'PickupallocationController'
  })
  .otherwise({redirectTo: '/dashboard'});
}]);
 
