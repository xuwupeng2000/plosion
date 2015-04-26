'use strict';

/**
 * @ngdoc function
 * @name plosionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plosionApp
 */
angular.module('plosionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
