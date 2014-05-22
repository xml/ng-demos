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
    
    /*  STUFF NOT DIRECTLY RELATED TO DEMO  */
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


    /*  STUFF DIRECTLY RELATED TO DEMO BEGINS  */
    
    $scope.topNavState = false; // data-driven UI!
    $scope.toggleTopNav = function() {
        // If the nav is already hidden, show it, BUT.. also setup the handler for clicks elsewhere
        if ($scope.topNavState === false) {
            
            // KEY LINE #1: SENDS A MESSAGE TO OUR SPECIAL DIRECTIVE, REQUESTING THAT IT MONITOR FOR CLICKS
            $rootScope.$broadcast('requestClickDetect');
            $scope.topNavState = true;
        } else {
            // and if it's already showing, hide it
            $scope.topNavState = false;
        }
    }

    function handleBodyClick() {
        // this is our handler function, for when we learn there's been a click somewhere else. 
        $timeout(function() {
            $scope.toggleTopNav();
        }, 0)
    }

    // KEY LINE #3: WHEN THE CLICK NOTIFICATION COMES IN, REACT AND CLOSE THE PANEL
    $scope.$on('bodyClicked', handleBodyClick);

  });


