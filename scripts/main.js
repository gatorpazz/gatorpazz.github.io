angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider){
      $mdThemingProvider.theme('default')
          .primaryPalette('red')
          .accentPalette('orange')
          .dark();
    })
    .config(function($mdIconProvider) {
      $mdIconProvider.defaultIconSet('/images/mdi.svg')
    });

function scrollTo(target) {
    var offset;
    var scrollSpeed = 600;
    var wheight = $(window).height();
	var viewport = $(window).width();

    offset = $(target).offset().top - 77.5;

    $('html, body').animate({scrollTop:offset}, scrollSpeed);
}
