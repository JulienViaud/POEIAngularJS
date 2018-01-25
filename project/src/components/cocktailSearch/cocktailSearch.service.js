(function() {
    'use strict';

    function cocktailSearchService($http, searchConfigService){
        var service = {};
        service.liste = [];
        service.getCocktail = getCocktail;
        service.searchConfigService = searchConfigService;

      function getCocktail (){
	       return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+searchConfigService.ingredient)
                .then(function(response){
                  console.log('Success: %o', response);
                  service.liste = response.data.drinks;
                  console.log(response.data.list);
                })
                .catch(function(error){
                  console.log('Error: %o', error);
                  service.liste = [];
                });
        }
      return service;
    }

    cocktailSearchService.$inject = ['$http', 'searchConfigService'];

    angular.module('daproject')
        .factory('cocktailSearchService', cocktailSearchService);

})();
