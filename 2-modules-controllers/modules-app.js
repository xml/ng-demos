angular.module('myApp', []);

// angular.module('myResources', []).controller('myController', function($scope){
//     $scope.meetupModel = {
//         presenter: "Christian",
//         organizer: "Leigh"
//     }
//     $scope.demo= function() {
//         alert("Hello, " + $scope.meetupModel.organizer);
//     }

// });


/* ALTERNATE FORM OF CONTROLLER DEFINITION */
/* DON'T DO THIS. BUT UNDERSTAND IF YOU SEE IT. */

// function myController($scope){
//     $scope.meetupModel = {
//         presenter: "Christian",
//         organizer: "Leigh"
//     }
//     $scope.demo= function() {
//         alert("Hello, " + $scope.meetupModel.presenter);
//     }

// }