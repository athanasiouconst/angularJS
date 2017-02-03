/**
 * Created by costas on 3/2/2017.
 */
(function () {

    'use strict';

    angular.module('myFirstApp',[])

    .controller('MyFirstController', function ($scope) {
      $scope.name = "Costas Athanasiou";
      $scope.sayHello = function () {
          return "Costas Athanasiou";
      }
    });
})();