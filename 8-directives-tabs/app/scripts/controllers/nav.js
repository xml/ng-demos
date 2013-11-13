'use strict';
/* jshint quotmark:true */

angular.module('TabsApp')
  .controller('NavCtrl', ['$scope', '$location', '$routeParams', '$rootScope', function ($scope, $location, $routeParams,  $rootScope) {
    // overview is an app-wide constant generated in the Angular bootstrapping process

    $scope.params = $routeParams;

    $scope.currentNavArray = function() {
        return $location.path().split('/');
    } // build an array of the route

    $rootScope.navParams = function() {
        var template = {
                func: undefined,
                sl: undefined,
                unit: undefined
            },
            current = $scope.currentNavArray();

        // we're abstracting path position into organization, which isn't always literally true...
        template.func = current[1]; // The BSC Function, or 'BSC', or "Quarterly"
        template.sl = current[2]; // The Service Line
        template.unit = current[3]; // The Unit
        // returned object will show `undefined` where not present
        return template;
    }

    $scope.isQuarterly = function() {
        var current = $scope.navParams().func;
        // console.log(current);
        return current === 'quarterly';
    }



  }]);
