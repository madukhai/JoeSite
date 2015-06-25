angular.module('joeSite', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				redirectTo:'/home'
				})
			.when('/home', {
				templateUrl: 'templates/pages/main/home.html',
				})
			.when('/about', {
				templateUrl: 'templates/pages/main/about-me.html'
				})
			.when('/skills', {
				templateUrl: 'templates/pages/main/skills.html'
			})
			.when('/experience', {
				templateUrl: 'templates/pages/main/experience.html'
			})
			.when('/contact', {
				templateUrl: 'templates/pages/main/contact.html'
			})
			.when('/shopping', {
				templateUrl: 'templates/pages/main/my-shopping.html'
			})
			.otherwise({redirectTo:'/'});
		}]);
	