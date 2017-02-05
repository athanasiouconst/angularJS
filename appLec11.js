/**
 * Created by costas on 4/2/2017.
 */
(function () {
    'use strict';

    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Costas";
        $scope.stateOfBeing = "Athanasiou";

        $scope.sayMessage = function () {
            return "Costas likes to develop JS!";
        };

        $scope.feedCostas = function () {
            $scope.stateOfBeing = "develop";
        };
    }

})();