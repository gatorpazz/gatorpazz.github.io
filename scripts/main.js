angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
          .primaryPalette('red')
          .accentPalette('orange')
          .dark();
    });
