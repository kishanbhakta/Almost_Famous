;(function (){

  'use strict';

  angular.module('almostFamous')

  .service('EventsService', ['SERVER', '$http', '$state',
    function (SERVER, $http, $state) {

      var endpoint = SERVER.URL;
      // var api = '?apiKey=ZV5Qc-g5yNbRuU15JzBfdYGGEbrpMS_c';
      this.getEvent = function (res) {
        return $http.get(endpoint + '/events', SERVER.CONFIG);

    };
  }]);
}());
