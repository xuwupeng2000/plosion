'use strict';

/**
 * @ngdoc overview
 * @name plosionApp
 * @description
 * # plosionApp
 *
 * Main module of the application.
 */
angular
  .module('plosionApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
  });
