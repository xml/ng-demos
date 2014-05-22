/* You'll see far too many versions of service creation in the Angular docs and 
    in other examples. To be clear, here are all/most of them. */ 

/* VERSION 1 OF HOW TO REGISTER A SERVICE (most concise):
 just call the .service method directly on the module, after creation time. 
(Alternately: substitute the '.factory' method for '.service'. Same syntax, otherwise) */

angular.module('myApp', ['myResources']);

angular.module('myApp').service('fileSystem', function() {
        return {template2_path: '../common/template-beta.html'};
    });


/* VERSION 2 OF HOW TO REGISTER A SERVICE:
 in the config function argument at module creation time
(Alternately: substitute the '.factory' method for '.service'. Same syntax, otherwise) */

// angular.module('myApp', ['myResources'], function($provide) {
//     $provide.service('fileSystem', function() {
//         return {template2_path: '../common/template-beta.html'};
//     });
// });


/* VERSION 3 OF HOW TO REGISTER A SERVICE:
   in the module's config method after creation time.
   (Alternately: substitute the '.factory' method for '.service'. Same syntax, otherwise) */

// angular.module('myApp', ['myResources']);

// angular.module('myApp').config(function($provide) {
//     $provide.service('fileSystem', function() {
//         return {template2_path: '../common/template-beta.html'};
//     });
// });


angular.module('myResources', [])
    .controller('templateController', function($scope){
        window.bob = $scope.meetupModel = {
            presenter: "Christian",
            organizer: "Tom",
            yourName: '',
            templateState: true
        }
        $scope.demo= function() {
            alert("Hello, " + $scope.meetupModel.yourName);
        }
    });

angular.module('myResources')
    .controller('mainController', function($scope, fileSystem){
        $scope.mainModel = fileSystem;

    });



    