(function() {
  'use strict';


  function FinalCtrl($location,searchConfigService) {
  	var vm  =  this;
    vm.input;
    vm.supService = searchConfigService;
    vm.searchConfigService = searchConfigService;
    vm.click = clicBouton;

    function clicBouton(){
      vm.searchConfigService.ingredient = vm.input;
      vm.searchConfigService.getCocktail();
    }
  }


  FinalCtrl.$inject = ['$location','searchConfigService','searchConfigService'];


  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
