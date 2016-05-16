angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
          .primaryPalette('red')
          .accentPalette('orange')
          .dark();
    })
    .config(function($mdIconProvider) {
      $mdIconProvider.defaultViewBoxSize(50)
        .defaultIconSet('/images/mdi.svg', 50);
    });
