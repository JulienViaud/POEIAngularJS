(function() {
  'use strict';

  function Exo04Ctrl($location) {
    var vm = this;
    vm.txt;
    vm.clicBouton=clicBouton;

    function clicBouton(){

            console.log(vm.txt);
    }

  Exo04Ctrl.$inject = ['$location'];


}
  angular.module('daproject')
    .controller('Exo04Ctrl', Exo04Ctrl);

})();
