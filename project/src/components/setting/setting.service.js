(function() {
    'use strict';

    function settingService() {
        var service = {};
        service.city = '';
        service.isCelsius = true;

      return settingService;
    }

    settingService.$inject = [];

    angular.module('daproject')
        .factory('settingService', settingService);

})();
