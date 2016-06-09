angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
          .primaryPalette('blue-grey')
          .accentPalette('indigo')
          .dark();
    })
    .config(function($mdIconProvider) {
      $mdIconProvider.defaultIconSet('/images/mdi.svg')
    });
