(function() {
  'use strict';

  angular.module('almostFamous')

  .controller('EventsCtrl', ['$scope', '$http', '$state', 'EventsService', 'SERVER',
   function($scope, $http, $state, EventsService, SERVER) {

     var vm = this;
      vm.state = {event:[]};
      vm.getEvent = function (res) {
       EventsService.getEvent(res).then(function(res){
       $scope.events = res.data;
       console.log(res.data);
        });
      };
      vm.getEvent({res:''});

   }
  ]);
}());
