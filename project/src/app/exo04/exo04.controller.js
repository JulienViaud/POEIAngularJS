(function() {
  'use strict';

  function Exo04Ctrl(settingService,meteoService) {
    var vm = this;
    vm.txt;
    vm.supService = settingService;
    vm.clicBouton = clicBouton;

    function clicBouton(){
      settingService.city = vm.txt;
    }
  }

  Exo04Ctrl.$inject = ['settingService','meteoService'];

  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
