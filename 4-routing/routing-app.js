angular.module('myApp', ['myResources'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/alpha', {templateUrl: '../common/template-alpha.html', controller: "templateController"})
            .when('/beta', {templateUrl: '../common/template-beta.html', controller: "templateController"})
            .otherwise({redirectTo: '/alpha'});
    });

// STEP 1: Note how routing works, with templates and controllers
// STEP 2: Note the nested controllers because they're assigned both in template and in routing. Disable in template.
// STEP 3: Note controllers are INSTANCES, and non-persistent, unlike services, as you toggle back and forth between two views that share the same controller *constructor*. 


angular.module('myResources', []).controller('templateController', function($scope){
    window.bob = $scope.meetupModel = {
        presenter: "Christian",
        organizer: "Tom",
        yourName: ''
    }
    $scope.demo = function() {
        alert("Hello, " + $scope.meetupModel.yourName);
    }
});

angular.module('myResources').controller('mainController', function($scope){
    $scope.mainModel = {template2_path: '../common/template-beta.html'}
});