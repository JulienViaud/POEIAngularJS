(function() {
  'use strict';

  function Exo03Ctrl($location) {
    var vm = this;
    vm.films = [
	{select : false, name: 'Fast and Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001},
      {select : false, name: '2 Fast 2 Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003},
	{select : false, name: 'Fast & Furious: Tokyo Drift', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006}
      ];
      vm.clic = clicPhoto;

      function clicPhoto($event){
            var indexFilms = _.findIndex(vm.films, function(o) { return o.img == $event.target.src; });
            vm.films[indexFilms].select = true;
            //console.log($event.target.src);
      }
  }

  

  Exo03Ctrl.$inject = ['$location'];

  angular.module('daproject')
    .controller('Exo03Ctrl', Exo03Ctrl);

})();