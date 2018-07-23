app.controller('galleryController', function($scope, $timeout) {
    
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
 
    $scope.animateElementIn = function($el) {
        $el.removeClass('hidden');
        $el.addClass('animated fadeInUp');
    };
    
    $scope.animateElementOut = function($el) {
        // $el.addClass('hidden');
        // $el.removeClass('animated fadeInUp');
    };

});