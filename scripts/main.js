angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
          .primaryPalette('blue-grey')
          .accentPalette('amber')
          .dark();
    })
    .config(function($mdIconProvider) {
      $mdIconProvider.defaultIconSet('/images/mdi.svg')
    });
