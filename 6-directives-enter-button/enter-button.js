
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

				// STEP 1: ENABLE A BASIC ENTER HANDLER: note how we use declarative classnames for re-usability
				// element.bind("mouseenter", function(){
				// 	// we're getting the classname from the attribute on the element
				// 	element.addClass(attrs.targetClass); 

				// 	//  STEP 4B: test what went wrong after switching to a template.
				// 	// element.addClass('outer');
				// })

				// STEP 2: ENABLE A BASIC LEAVE HANDLER
				// element.bind("mouseleave", function(){
				// 	// we're getting the classname from the attribute on the element
				// 	element.removeClass(attrs.targetClass);
				// })

			},

			// STEP 3: ENABLE THE DIRECTIVE'S OWN CONTROLLER, TO CARRY ITS OWN DATA PAYLOAD
			// (directives can be mini-applications in their own little world)
			// controller: function($scope) {
			// 	console.log('Controller instantiated');
			// 	$scope.prop1 = {Hello: 'World'};
			// },

			// STEP 4: GO OUT TO THE TEMPLATE AND SWITCH TO BYO TEMPLATE, BUT NOTE ODDITY...
			// template: '<button class="btn" target-class="btn-danger">Template Button!</button>',

			// STEP 5: SWITCH TO A FILE-BASED TEMPLATE, NOT INLINE
			// templateUrl: 'button.html',


			// STEP 4C: NOW THAT WE KNOW WHAT'S WRONG, FIX IT WITH `replace:`
			// replace: true,

			// STEP 6: GO OUT TO TEMPLATE AND SWITCH INVOCATION STYLE TO ELEMENT, AND SEE IF IT WORKS...

			// STEP 7: IT DOESN'T WORK. BECAUSE WE NEED TO PROVIDE THE restrict: PROPERTY
			// restrict: 'E',

			// STEP 8: SHOW BOTH OPTIONS, THEN MAKE restrict: 'EA' TO ALLOW BOTH TO WORK

			// STEP 9: restrict: 'EACM' - ENABLE CLASS BUTTON, TOO, AND NOTE THE ONE BELOW IT DOESN'T NEED OUR HELP

			// STEP 10: ENABLE ISOLATE SCOPE. Note that you lose the attr on an element declaration.
			// scope: {targetClass: '@',
					// enterButton: '@'}

			// STEP 11: REVERT TO ORIGINAL ATTRIBUTE DIRECTIVE, DISABLE REPLACE, RESTRICT & TEMPLATE, BUT KEEP ISOLATE SCOPE. Note that the properties on the controller aren't accessible. They're being overridden by the isolate scope. Disable isolate scope, and they come back.
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