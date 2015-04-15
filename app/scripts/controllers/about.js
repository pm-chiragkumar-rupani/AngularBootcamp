'use strict';

/**
 * @ngdoc function
 * @name bootcampApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bootcampApp
 */
angular.module('bootcampApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.repeatData = ['1', '2', '3', '4', '5'];
  });
