
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

				// 	// element.addClass('outer');
				// })

				// element.bind("mouseleave", function(){
				// 	element.removeClass(attrs.targetClass); // we're getting the classname from the attribute on the element
				// })
			},
			// controller: function($scope) {
			// 	$scope.prop1 = {Hello: 'World'};
			// },
			// template: '<button class="btn" target-class="btn-danger">Template Button!</button>',
			// templateUrl: 'assets/partials/button.html',
			// restrict: 'EACM',
			// replace: true,
			// scope: {targetClass: '@'},

		}
	})









/*
1. Basic: Enter
2. Basic: Leave
3. Basic w/ Controller
4. Change to Element
	4a. No content
5. So, Restrict: 'EA'
	6. Template
	7. Template URL
8. Not working: no class being added
	8B. so, check outer: Aha!
7. So, Replace
8. Restrict to C & M



OPTIONAL:
8. isolate scope
9. Log attrs.targetClass & $scope.targetClass

*/