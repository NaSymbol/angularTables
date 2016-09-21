'use strict';

/**
 * @ngdoc function
 * @name angularTablesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTablesApp
 */
angular.module('angularTablesApp')
  .controller('MainCtrl', ['$http','$scope', function ($http, $scope) {

$scope.dataFromPlayer = [];
$http.get('data/players.json').success(function(data){
  $scope.dataFromPlayer = data;
});





  }]);
