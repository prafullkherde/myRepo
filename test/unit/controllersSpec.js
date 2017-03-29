'use strict';

/* jasmine specs for controllers go here */

describe('myWeatherApp controllers', function(){

  beforeEach(module('myWeatherApp.controllers'));
  beforeEach(module('myWeatherApp.services'));
  beforeEach(module('iso-3166-country-codes'));

  describe('myWeatherCtrl', function() {
    var $scope, ctrl, $httpBackend;

    beforeEach(module('myWeatherApp'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://api.openweathermap.org/data/2.5').
        respond([{forecast: {city: {name: 'Pune'} } }]);

      $scope = $rootScope.$new();
      ctrl = $controller('myWeatherCtrl', { $scope: $scope });
    }));

//    it('should set the default value of iconBaseUrl', function() {
//      expect($scope.iconBaseUrl).toBe('http://openweathermap.org/img/w/');
//    });
  });
});
