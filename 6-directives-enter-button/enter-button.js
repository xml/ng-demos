
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

				// element.bind("mouseenter", function(){
				// 	element.addClass(attrs.targetClass); // we're getting the classname from the attribute on the element

				// 	//  Use only for testing what went wrong after switching to a template.
				// 	// element.addClass('outer');
				
				// })

				// element.bind("mouseleave", function(){
				// 	element.removeClass(attrs.targetClass); // we're getting the classname from the attribute on the element
				// })

			},

			// controller: function($scope) {
			// 	console.log('Controller instantiated');
			// 	$scope.prop1 = {Hello: 'World'};
			// },

			// restrict: 'EACM',

			// template: '<button class="btn" target-class="btn-danger">Template Button!</button>',
			// templateUrl: 'button.html',

			// replace: true,

			// scope: {targetClass: '@',
			// 		enterButton: '@'}

		}
	})









/*
1. Basic: Enter
2. Basic: Leave
3. Basic w/ Controller
4. Switch to attribute that gets content from template
5. Now, styles are wacky
	B. so, check outer: Aha!
6. So, use: Replace property

5. Template vs templateUrl properties (Ignore the "Type=" for now. )
6. Change to Element - Result: No content
7. So, Restrict: 'EA'

10. Add C & M to Restrict (be sure to un-comment the class example)
11. Now: note that "Type=". To make that work, enable the isolate scope. See how that enables the template type. But...
	10a. Revert to original attribute. Disable ECM & replace & template. Now, see how it kills "Hello, *World*" by overriding the controller's scope



OPTIONAL:
8. isolate scope
9. Log attrs.targetClass & $scope.targetClass

*/