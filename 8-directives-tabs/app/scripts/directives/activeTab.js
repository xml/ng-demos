'use strict';

angular.module('TabsApp')
    .directive('detectActiveTab', ['$location',
        function($location) {
            return {
                link: function postLink(scope, element, attrs) {
                    scope.$on("$routeChangeSuccess", function(event, current, previous) {
                        /*  
                        Designed for full re-usability at any path, any level, by using data from attrs.
                        Declare like this: <li class="nav_tab"><a href="#/home" active-tab="1">HOME</a></li> 
                        */

                        // This var grabs the tab-level off the attribute, or defaults to 1
                        var pathLevel = attrs.detectActiveTab || 1,
                            // This var finds what the path is at the level specified
                            pathToCheck = $location.path().split('/')[pathLevel] || "current $location.path doesn't reach this level",
                            // This var finds grabs the same level of the href attribute
                            tabLink = attrs.href.split('/')[pathLevel] || "href doesn't include this level";
                        console.log(pathToCheck);
                        console.log(tabLink);
                        // Above, we use the logical 'or' operator to provide a default value in cases 
                        // where 'undefined' would otherwise be returned.
                        // This prevents cases where undefined===undefined, possibly causing multiple tabs to be 'active'.

                        // now compare the two:
                        if (pathToCheck === tabLink) {
                            element.addClass("active");
                        } else {
                            element.removeClass("active");
                        }
                    });
                }
            };
        }
    ]);

angular.module('TabsApp')
    .directive('findActiveTab', ['$location',
        function($location) {
            return {
                link: function postLink(scope, element, attrs) {
                    scope.$on("$routeChangeSuccess", function(event, current, previous) {
                        /*  designed for full re-usability at any path, any level, by using data from attrs
                            declare like this: 
                              <nav show-active-tab="1"> 
                                <a href="#/home">HOME</a>
                              </nav> 

                        */

                        // this var grabs the tab-level off the attribute, or defaults to 1
                        var pathLevel = attrs.findActiveTab || 1,
                            // this var finds what the $location.path is at the level specified
                            pathToCheck = $location.path().split('/')[pathLevel] || "current $location.path doesn't reach this level";

                        // now, iterate the children. Ideally, child elements should all be <a>'s. 
                        angular.forEach(element.children(), function(item) {
                            var specimen = angular.element(item),
                                // find each item's matching level on the href attribute
                                tabLink = specimen.attr('href').split('/')[pathLevel] || "href doesn't include this level";
                            // now compare the item to the current $location:
                            if (pathToCheck === tabLink) {
                                specimen.addClass("active");
                            } else {
                                specimen.removeClass("active");
                            }
                        })
                    });
                }
            };
        }
    ]);



/*
1. Behavior without, then with directive file enabled, defaults to 'detect' version
2. Note declarative params, just like clock.
3. Demo /anything/level2
4. Demo 'find' version instead of 'detect'


*/
