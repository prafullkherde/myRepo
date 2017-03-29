/* Created by prafull.kherde on 25-03-2017.
 * For MyWeatherApp 
 */
 
(function () {
'use strict';

// Declare app level module which depends on filters, and services
angular.module('myWeatherApp', [
  'ngRoute',
  'myWeatherApp.filters',
  'myWeatherApp.services',
  'myWeatherApp.directives',
  'myWeatherApp.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'partials/forecast.html', controller: 'myWeatherCtrl'});  
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);

})();
