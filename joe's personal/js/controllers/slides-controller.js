angular.module('joeSite')
	.controller('SlidesController', function($scope){
		
		$scope.slides = [
		                 {image: './imgs/index_images/detail.jpg'},
		                 {image: './imgs/index_images/energetic.jpg'},
		                 {image: './imgs/index_images/learn.jpg'}
		                 
		                 ];
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

       
	});