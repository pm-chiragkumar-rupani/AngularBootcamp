'use strict';

/**
 * @ngdoc function
 * @name bootcampApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootcampApp
 */
angular.module('bootcampApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
