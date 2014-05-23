angular.module('myApp', []).controller('repeatController', function($scope) {
    /* STEP 0: ENABLE THE DATA TO POPULATE THE REPEAT */
    $scope.gurus = [{
        'name': "Christian Lilley",
        'age': 39,
        'specialty': "Talking Too Much about Cool Stuff",
        'img': "images/cml.jpg"
    }, {
        'name': "Leigh Frampton",
        'age': 19,
        'specialty': "Organizing Cool Meetups about Cool Stuff",
        'img': "images/lf.jpg"
    }, {
        'name': "Misko Hevery",
        'age': 1000,
        'specialty': "Awesomely SuperHeroic MVW Frameworks",
        'img': "images/mh.png"
    }]
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

/* STEP 6B: ENABLE THIS CUSTOM FILTER  */
// angular.module('myApp').filter('noLilleys', function() {
//     // intended for filtering arrays, removing anyone with name containing "Lilley"
//     return function(inputArray) {
//         input = inputArray || [];
//         var output = [];
//         inputArray.forEach(function(item, index) {
//             console.log(item);
//             if (item.name.toLowerCase().indexOf("lilley") === -1) {
//                 output.push(item);
//             }
//         })

//         return output;
//     };
// })
