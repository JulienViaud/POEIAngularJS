(function() {
  'use strict';

  function Exo03Ctrl($location) {
    var vm = this;
    vm.msg = 'Welcome All!';
    vm.subMsg = 'A seed Project';
  }

  Exo03Ctrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('Exo03Ctrl', Exo03Ctrl);

})();