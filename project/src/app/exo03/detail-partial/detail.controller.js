(function() {
  'use strict';

  function DetailPartialCtrl($location) {
    var vm = this;
    var titre = "coucou";
  }

  DetailPartialCtrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('DetailPartialCtrl', DetailPartialCtrl);

})();