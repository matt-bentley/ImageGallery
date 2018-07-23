var app = angular.module('Gallery', ['ui.router', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'angular-scroll-animate']);

app.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    
    $urlRouterProvider.otherwise('/');

    var homeState = {
      name: 'home',
      url: '/',
      templateUrl: 'Templates/home.html'
    }
  
    var galleryState = {
        name: 'gallery',
        url: '/gallery',
        templateUrl: 'Templates/gallery.html'
      }

    var aboutState = {
      name: 'about',
      url: '/about',
      templateUrl: 'Templates/about.html'
    }
  
    $stateProvider.state(homeState);
    $stateProvider.state(galleryState);
    $stateProvider.state(aboutState);

    // $mdThemingProvider.theme('default')
    // .primaryPalette('indigo')
    // .accentPalette('pink');
  });