
angular.module('ClickDetectApp')
  .directive('anyClickDetect', function ($rootScope, $timeout) {
    console.log('directive active');
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        
        function attachHandler() {
            // if we don't push the attachment of the handler onto the next turn of the event loop, 
            // it'll actually intercept the click that's creating the handler. 
            $timeout(function() {
                // handler will only run once, then self-destruct
                element.one('click', function(event) {
                    // we only want this special handler to fire if we're not simply clicking again on the 
                    // main menu button. If we are, let the ng-click on the button handle it.
                    var target = event.target.className;
                    if (target === "head-icon-button" || target === "fa fa-bars") {
                        return false;
                    } else {
                        $rootScope.$broadcast('bodyClicked');
                    }
                });  
            }, 0);
  
        }

        scope.$on('requestClickDetect', attachHandler);
      }
    };
  });