angular.module('joeSite')
.directive('home', function() {
  return {
	restrict:'E',
    templateUrl: './templates/pages/main/home.html'
  };
});
