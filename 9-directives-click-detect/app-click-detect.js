'use strict';

angular.module('ClickDetectApp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/content', {
                templateUrl: 'views/content.html'
            })
            .when('/more', {
                templateUrl: 'views/more.html'
            })
            .when('/', {
                redirectTo: '/home'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });


'use strict';

angular.module('ClickDetectApp')
  .controller('NavCtrl', function ($scope, $rootScope, $location, $timeout) {
    var navPaths = {
            home: {
                subnavURL: "views/nav-home.html",
                statusText: "Home"
            },
            content: {
                subnavURL: "views/nav-content.html",
                statusText: "Content & Stuff"
            },
            more: {
                subnavURL: "views/nav-more.html",
                statusText: "More Stuff"
            }
        };
    $scope.currentNav = null;

    function updateNav(){
        $scope.currentNav = navPaths[getCurrentTopPath()];
    }
    function getCurrentTopPath() {
        var raw = $location.path();
        return raw.split('/')[1];
    }
    $scope.$on('$locationChangeSuccess', updateNav);



    $scope.topNavState = false;
    $scope.toggleTopNav = function() {
        if ($scope.topNavState === false) {
            $rootScope.$broadcast('requestClickDetect');
            $scope.topNavState = !$scope.topNavState;
        } else {
            $scope.topNavState = !$scope.topNavState;
        }
    }
    function hideTopNav() {
        $scope.topNavState = false;
    }
    function handleBodyClick() {
        $timeout(function() {
            $scope.toggleTopNav();
        }, 0)
    }
    $scope.$on('bodyClicked', handleBodyClick);

  });


