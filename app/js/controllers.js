
/* Controller created by prafull.kherde on 25-03-2017.
 * For MyWeatherApp 
 */
 
(function () {
'use strict';

angular.module('myWeatherApp.controllers', [])

  // Controller for "my weather map" api data search
  .controller('myWeatherCtrl',
    ['$scope','myWeatherMapService','exampleLocationsGVar','ISO3166',
      function($scope,myWeatherMapService,exampleLocationsGVar,ISO3166) {

    $scope.message = '';
    $scope.hasState = '';

    // Expose example locations to $scope
    $scope.exampleLocationsGVar = exampleLocationsGVar;    
    $scope.iconBaseUrl = 'http://openweathermap.org/img/w/';

    // On initialization load data for first example entry
    $scope.forecast = myWeatherMapService.queryForecastDaily({
      location: exampleLocationsGVar[ 0 ]
    });

    // Get forecast data for location as given in $scope.location
    $scope.getForecastByLocation = function() {

      if ($scope.location == '' || $scope.location == undefined) {
        $scope.hasState = 'has-warning';
        $scope.message = 'Please provide a city';
        return;
      }

      $scope.hasState = 'has-success';

      $scope.forecast = myWeatherMapService.queryForecastDaily({
        location: $scope.location
      });
    };

    // Set $scope.location and execute search on API
    $scope.setLocation = function(loc) {
      $scope.location = loc;
      $scope.getForecastByLocation();
    };

    // Get icon image url
    $scope.getIconImageUrl = function(iconName) {
      return (iconName ? $scope.iconBaseUrl + iconName + '.png' : '');
    };

  }])
  
  })();
