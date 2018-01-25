(function() {
  'use strict';


  function FinalCtrl($location,searchConfigService) {
  	var vm  =  this;
    vm.input;
    vm.supService = searchConfigService;
    vm.click = clicBouton;

    function clicBouton(){
       searchConfigService.ingredient = vm.input;
    }
  }


  FinalCtrl.$inject = ['$location','searchConfigService'];


  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
