'use strict';

angular.module('ClickDetectApp')
  .directive('findActiveTab', ['$location', function ($location) {
    return {
      link: function postLink(scope, element, attrs) {
        scope.$on("$routeChangeSuccess", function (event, current, previous) {
            /*  designed for full re-usability at any path, any level, by using data from attrs
                declare like this: <nav show-active-tab="1"> <a href="#/home">HOME</a></nav> */

            // this var grabs the tab-level off the attribute, or defaults to 1
            var pathLevel = attrs.findActiveTab || 1,
            // this var finds what the $location.path is at the level specified
                pathToCheck = $location.path().split('/')[pathLevel] || "current $location.path doesn't reach this level";

            // now, iterate the children. Ideally, child elements should all be <a>'s. 
            angular.forEach(element.children(), function(item){
                var specimen = angular.element(item),
                    // find each item's matching level on the href attribute
                    tabLink = specimen.attr('href').split('/')[pathLevel] || "href doesn't include this level";
                // now compare the item to the current $location:
                if (pathToCheck === tabLink) {
                  specimen.addClass("active");
                }
                else {
                  specimen.removeClass("active");
                }
            })
                
        });
      }
    };
  }]);