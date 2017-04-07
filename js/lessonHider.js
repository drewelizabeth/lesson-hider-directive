angular.module('directivePractice').directive('lessonHider', function() {
    return {
        templateUrl: 'lessonHider.html',
        restrict: 'E',
        link: function(scope, element, attributes) {
            console.log(scope, element, attributes);
        }
    }
})