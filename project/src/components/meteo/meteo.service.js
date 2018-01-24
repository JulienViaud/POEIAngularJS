(function() {
    'use strict';

    function meteoService() {
        var meteo = {};
        meteo.liste = [];
        meteo.getMeteo = getMeteo;

      function getMeteo (){}

      return meteo;
    }

    meteoService.$inject = [];

    angular.module('daproject')
        .factory('meteoService', meteoService);

})();
