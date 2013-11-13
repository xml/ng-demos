
/**************************
* Application Creation
**************************/
// our base application module, which calls other modules as needed
var app = angular.module('playground', ['components'])


angular.module('components', [])
	.directive('enterButton', function(){
		return {
			link: function(scope, element, attrs) {
				// this example binds a behavior to the mouseenter event
				element.bind("mouseenter", function(){
					element.addClass(attrs.targetClass); // we're getting the classname from the attribute on the element
					// console.log(scope.targetClass);
					console.log(attrs.targetClass);
					// element.addClass('outer');
				})
				// element.bind("mouseleave", function(){
				// 	element.removeClass(attrs.targetClass); // we're getting the classname from the attribute on the element
				// })
			},
			// controller: function($scope) {
			// 	$scope.prop1 = {Hello: 'World'};
			// },
			// template: '<button class="btn" target-class="btn-danger">Template Button!</button>',
			// templateUrl: 'assets/partials/button.html',
			// restrict: 'EA',
			// replace: true,
			// scope: {targetClass: '@'},

		}
	})
