(function() {
  'use strict';

  function Exo04Ctrl(settingService,meteoService) {
    var vm = this;
    vm.txt;
    vm.supService = settingService;
    vm.meteoService = meteoService;
    vm.clicBouton = clicBouton;

    function clicBouton(){
      settingService.city = vm.txt;
      meteoService.getMeteo();
    }
  }

  Exo04Ctrl.$inject = ['settingService','meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
