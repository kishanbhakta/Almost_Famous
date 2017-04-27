;(function (){

  'use strict';

  angular.module('almostFamous')

  .service('PhotosService', ['SERVER', '$http', '$state',
    function (SERVER, $http, $state) {

      var endpoint = SERVER.URL;

      this.getPhoto = function (res) {
        return $http.get(endpoint + '/photos', {params: {apiKey: SERVER.CONFIG.apiKey}});

    };
  }]);
}());
