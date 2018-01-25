(function() {
    'use strict';

    function meteoService($http, settingService){
        var service = {};
        service.liste = [];
        service.getMeteo = getMeteo;

      function getMeteo (){
	       return $http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + settingService.city + '&APPID=20d9688de0be1516b4684795d29e0e83&units=metric')
                .then(function(response){
                  console.log('Success: %o', response);
                  service.liste = response.data.list;
                  console.log(response.data.list);
                })
                .catch(function(error){
                  console.log('Error: %o', error);
                  service.liste = [];
                });
        }
      return service;
    }

    meteoService.$inject = ['$http', 'settingService'];

    angular.module('daproject')
        .factory('meteoService', meteoService);

})();
