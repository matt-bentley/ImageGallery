app.controller('slideshowController', function($scope, $timeout, $interval) {
    
    $scope.images = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png'
    ];

    $scope.currentSlide = 0;
    var slideShow;

    function nextSlide(){
        if($scope.currentSlide == ($scope.images.length - 1)){
            $scope.currentSlide = 0;
        }
        else{
            $scope.currentSlide++;
        }
    }

    $scope.forceNextSlide = function(){
        nextSlide();
        startSlideShow();
    }

    startSlideShow = function() {
        stopSlideShow();

        slideShow = $interval(function() {
          nextSlide();
        }, 3000);
      };

    stopSlideShow = function() {
        if (angular.isDefined(slideShow)) {
            $interval.cancel(slideShow);
            slideShow = undefined;
        }
    };

    $scope.$on('$destroy', function() {
        // Make sure that the interval is destroyed too
        stopSlideShow();
    });

    startSlideShow();

});