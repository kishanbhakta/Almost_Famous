(function() {
  'use strict';

  angular.module('almostFamous')

  .controller('PhotosCtrl', ['$scope', '$http', '$state', 'PhotosService', 'SERVER',
   function($scope, $http, $state, PhotosService, SERVER) {

     var vm = this;
      vm.state = {photo:[]};
      vm.getPhoto = function (res) {
       PhotosService.getPhoto(res).then(function(res){
       $scope.photos = res.data;
       console.log(res.data);
        });
      };
      vm.getPhoto({res:''});

   }
  ]);
}());
