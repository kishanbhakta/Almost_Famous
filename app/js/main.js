(function() {
  'use strict';

  var app = angular
    .module('almostFamous', [
      'ui.router',
      'firebase'
    ]);

    app.constant('SERVER', {
      URL: "https://api.mlab.com/api/1/databases/almostfamousatl/collections",
      CONFIG:{
          apiKey:'ZV5Qc-g5yNbRuU15JzBfdYGGEbrpMS_c'
          // 'contentType': 'application/json'
      }
    });

    // var database = firebase.database();

    app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
      //====================================
      // Home About Events and Booking Views
      //====================================

        .state('home', {
          url: '/',
          templateUrl:'views/home_tpl.html' //make sure to add comma when activating controller
          // controller: 'HomeCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl:'views/about_tpl.html'
          // controller: 'AboutCtrl'
        })
        .state('events', {
          url: '/events',
          templateUrl:'views/events_tpl.html',
          controller: 'EventsCtrl'
        })
        .state('booking', {
          url: '/booking',
          templateUrl:'views/booking_tpl.html'
          // controller: 'BookingCtrl'
        });
    }]);


}());
