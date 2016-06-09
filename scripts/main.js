angular
    .module('Portfolio', ['ngMaterial'])
    .config(function($mdThemingProvider, palettes){
      var customPrimary = {
        '50': '#ff7b82',
        '100': '#ff626a',
        '200': '#ff4852',
        '300': '#ff2f3a',
        '400': '#ff1522',
        '500': '#fb000d',
        '600': '#e1000c',
        '700': '#c8000a',
        '800': '#ae0009',
        '900': '#950008',
        'A100': '#ff959a',
        'A200': '#ffaeb3',
        'A400': '#ffc8cb',
        'A700': '#7b0006'
      };
      var customAccent = {
        '50': '#000a08',
        '100': '#00231d',
        '200': '#003d31',
        '300': '#005646',
        '400': '#00705a',
        '500': '#00896f',
        '600': '#00bc97',
        '700': '#00d6ac',
        '800': '#00efc0',
        '900': '#0affcf',
        'A100': '#00bc97',
        'A200': '#00a383',
        'A400': '#00896f',
        'A700': '#23ffd4'
      };
      var customWarn = {
        '50': '#ffb280',
        '100': '#ffa266',
        '200': '#ff934d',
        '300': '#ff8333',
        '400': '#ff741a',
        '500': '#ff6400',
        '600': '#e65a00',
        '700': '#cc5000',
        '800': '#b34600',
        '900': '#993c00',
        'A100': '#ffc199',
        'A200': '#ffd1b3',
        'A400': '#ffe0cc',
        'A700': '#803200'
      };
      var customBackground = {
        '50': '#737373',
        '100': '#666666',
        '200': '#595959',
        '300': '#4d4d4d',
        '400': '#404040',
        '500': '#333',
        '600': '#262626',
        '700': '#1a1a1a',
        '800': '#0d0d0d',
        '900': '#000000',
        'A100': '#808080',
        'A200': '#8c8c8c',
        'A400': '#999999',
        'A700': '#000000'
      };
      $mdThemingProvider.definePalette('customPrimary', customPrimary);
      $mdThemingProvider.definePalette('customAccent', customAccent);
      $mdThemingProvider.definePalette('customWarn', customWarn);
      $mdThemingProvider.definePalette('customBackground', customBackground);

      $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
    })
    .config(function($mdIconProvider) {
      $mdIconProvider.defaultIconSet('/images/mdi.svg')
    });
