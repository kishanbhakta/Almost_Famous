// (function() {
//   'use strict';
//
//   angular.module('almostFamous')
//
//   .controller('AboutCtrl', ['$scope', '$http', '$state', 'AboutService', 'SERVER',
//    function($scope, $http, $state, AboutService, SERVER) {
//
//     var vm = this;
//      vm.state = {about:[]};
//      vm.getAbout = function (res) {
//       AboutService.getAbout(res).then(function(res){
//       $scope.about = res.data.about;
//       console.log(res.data.about);
//        });
//      };
//      vm.getAbout({res:''});
//
//
//    }
//   ]);
// }());
