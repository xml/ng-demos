angular.module('myApp', []).controller('repeatController', function($scope){
    $scope.gurus = [
        {
            'name': "Christian Lilley",
            'age': 39,
            'specialty': "Talking Too Much about Cool Stuff",
            'img': "images/cml.jpg"
        },
        {
            'name': "Leigh Frampton",
            'age': 19,
            'specialty': "Organizing Cool Meetups about Cool Stuff",
            'img': "images/lf.jpg"
        },
        {
            'name': "Misko Hevery",
            'age': 1000,
            'specialty': "Awesomely SuperHeroic MVW Frameworks",
            'img': "images/mh.png"
        }
    ]
    $scope.config = {
        sorter: "name",
        options: ["name", "age", "specialty"],
        reverse: false,
        filterString: ''
    }
    $scope.reverseMe = function() {
        $scope.config.reverse = !$scope.config.reverse;
    }


});

