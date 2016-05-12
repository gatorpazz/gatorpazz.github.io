angular
    .module('Portfolio', ['ngMaterial', 'dives'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
          .primaryPalette('red')
          .accentPalette('orange')
          .dark();
    });
