// 'use strict'; 
//First, we have to create the angular module, because all the other files are going to load and need to attach to it.
var tabsApp = angular.module('TabsApp', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/home', {
            templateUrl:  'views/home-template.html',
      })
      .when('/home/level2', {
            templateUrl:  'views/level2-template.html',
      })
      .when('/finance', {
            templateUrl:  'views/finance-template.html',
      })
      .when('/finance/level2', {
            templateUrl:  'views/level2-template.html',
      })
      .when('/hr', {                    
            templateUrl: 'views/hr-template.html', // 'views/hr_overview_template.html',      
      })
      .when('/hr/level2', {
            templateUrl:  'views/level2-template.html',
      })
      .when('/quarterly', {                    
            templateUrl:  'views/quarterly_template.html',
        })
      .when('/quarterly/level2', {
            templateUrl:  'views/level2-template.html',
      })
     
      .otherwise({redirectTo: '/home'});
  }]);