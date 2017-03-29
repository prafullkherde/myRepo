/* Filter created by prafull.kherde on 25-03-2017.
 * For MyWeatherApp 
 */
 
(function () {
'use strict';

angular.module('myWeatherApp.filters', [])

  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])

  .filter('placeholder', [function() {
    return function (input,phvalue) {
      return (angular.isUndefined(input) || input == '') ? phvalue : input;
    };
  }])
  
  })();
