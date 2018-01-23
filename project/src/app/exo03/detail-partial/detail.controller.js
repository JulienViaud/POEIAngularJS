(function() {
  'use strict';

  function DetailCtrl($location) {
    var vm = this;
    var titre = 'coucou';
  }

  DetailCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailCtrl', DetailCtrl);

})();