'use strict';

/**
 * @ngdoc function
 * @name plosionApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plosionApp
 */
angular.module('plosionApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.galleryImages = ['/images/gallery_entry_1.png', '/images/gallery_entry_2.png', '/images/gallery_entry_3.png'];

    $scope.searchKeyword = function() {
      $window.alert('You are seraching');
    };

    $scope.goUp = function(){
      $scope.galleryImages.push($scope.galleryImages.shift());
    };

    $scope.goDown = function(){
      $scope.galleryImages.unshift($scope.galleryImages.pop());
    };
  });
