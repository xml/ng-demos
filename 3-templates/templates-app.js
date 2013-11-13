angular.module('myApp', ['myResources']);

angular.module('myResources', []).controller('templateController', function($scope){
    window.bob = $scope.meetupModel = {
        presenter: "Christian",
        organizer: "Leigh",
        yourName: '',
        templateState: true
    }
    $scope.demo= function() {
        alert("Hello, " + $scope.meetupModel.yourName);
    }
});

angular.module('myResources').controller('mainController', function($scope){
    $scope.mainModel = {template2_path: '../common/template-beta.html'}
});