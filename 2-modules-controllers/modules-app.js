angular.module('myApp', []);

// STEP 1: 
// UN-COMMENT THIS SECTION TO SEE HOW BASIC MODULE & CONTROLLER INSTANTIATION WORKS. 
// angular.module('myResources', []).controller('myController', function($scope){
//     $scope.meetupModel = {
//         presenter: "Christian",
//         organizer: "Tom",
//         yourName: ""
//     }
//     $scope.demo= function() {
//         alert("Hello, " + $scope.meetupModel.yourName);
//     }
// });

// STEP 2: 
// NOTE THAT THE APP STILL ISN'T WORKING. myController is still `undefined`, and interface is broken. 
// So, INCLUDE THE MYRESOURCES MODULE AS A DEPENDENCY OF THE MAIN APP MODULE, above.


// STEP 3: 
// ALTERNATE FORM OF CONTROLLER DEFINITION 
// For Maintainability/readability, Don't Do This. But Understand If You See It.
// Enable this code, and disable the modular code above, and note equivalent function. 

// function myController($scope){
//     $scope.meetupModel = {
//         presenter: "Christian",
//         organizer: "Tom",
//         yourName: ""
//     }
//     $scope.demo= function() {
//         alert("Hello, " + $scope.meetupModel.yourName);
//     }

// }