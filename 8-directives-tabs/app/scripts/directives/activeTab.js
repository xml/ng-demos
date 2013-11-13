'use strict';

angular.module('TabsApp')
  .directive('activeTab', ['$location', function ($location) {
    return {
      link: function postLink(scope, element, attrs) {
        // scope.$on("$routeChangeSuccess", function (event, current, previous) {
        //     /*  designed for full re-usability at any path, any level, by using data from attrs
        //         declare like this: <li class="nav_tab"><a href="#/home" active-tab="1">HOME</a></li> */

        //     // this var grabs the tab-level off the attribute, or defaults to 1
        //     var pathLevel = attrs.activeTab || 1,
        //     // this var finds what the path is at the level specified
        //         pathToCheck = $location.path().split('/')[pathLevel],
        //     // this var finds grabs the same level of the href attribute
        //         tabLink = attrs.href.split('/')[pathLevel];
        //     // now compare the two:
        //     if (pathToCheck === tabLink) {
        //       element.addClass("active");
        //     }
        //     else {
        //       element.removeClass("active");
        //     }
        // });
      }
    };
  }]);
