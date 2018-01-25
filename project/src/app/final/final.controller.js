(function() {
  'use strict';


  function FinalCtrl($location) {
  	var vm  =  this;

    vm.inputS ='';
    vm.affiche = affiche;

    function affiche(){
       vm.inputS;
  }

}


  FinalCtrl.$inject = ['$location'];


  angular.module('daproject')
    .controller('FinalCtrl', FinalCtrl);

})();
