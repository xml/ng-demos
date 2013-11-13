

// our base application module, which calls other modules as needed
var app = angular.module('playground', ['time'])

/**************************
* Controllers
**************************/
function Ctrl2($scope) {
  $scope.format1 = 'M/d/yy h:mm:ss a';
  $scope.format2 = 'h:mm:ss'
}


angular.module('time', [])
	.directive('myCurrentTime', function ($timeout, dateFilter){ //adding these two services to our directive's scope

		return {
			link:function(scope, element, attrs) {
					var timeFormat, //the date format
						timeoutId; // accessor so we can cancel updates when ready
					function updateTime() {
						element.text(dateFilter(new Date(), timeFormat)); // update the UI
					}
					scope.$watch(attrs.myCurrentTime, function(value){
						// the my-current-time attr is a reference to $scope.format. So, whenever $scope.format changes, the attr on my-current-time changes.
						// This lets us *declaratively* associate a directive element with models from the outer scope, and re-use the same directive with multiple data-bindings
						timeFormat = value;
						console.log(scope);
						updateTime();  // update whenever the value changes
					})
					function updateLater() {
						// save the timeoutId function for cancelling later
						timeoutId = $timeout(function() {
							updateTime(); // update
							updateLater(); // schedule another update in another second
						}, 1000);
					}
					// listen on DOM destroy (removal) event, and cancel the next UI update
					// to prevent updating time ofter the DOM element was removed.
					element.bind('$destroy', function() {
						$timeout.cancel(timeoutId);
					});
		
					updateLater(); // kick off the UI update process.
			}
		}
	}) // end 'time' module


