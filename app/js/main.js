(function() {
  'use strict';
  var app = angular
    .module('almostFamous', [
      'ui.router',
      'firebase'
    ]);
    app.constant('SERVER', {
      URL: 'https://almost-famous-6a869.firebaseio.com/',
      CONFIG:{
        apiKey: 'AIzaSyDDL0KirPNmSkXDhmLyHm0CqvCaRZoA5SE'
      }
      // firebase.initializeApp(config);
    });
    app.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // $urlRouterProvider.otherwise('/');
      $stateProvider
      //====================================
      // Home About Events and Booking Views
      //====================================

        .state('home', {
          url: '/',
          templateUrl:'js/routes/home/home_tpl.html',
          controller: 'HomeCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl:'js/routes/about/about_tpl.html',
          controller: 'AboutCtrl'
        })
        .state('events', {
          url: '/events',
          templateUrl:'js/routes/events/events_tpl.html',
          controller: 'EventsCtrl'
        })
        .state('booking', {
          url: '/booking',
          templateUrl:'js/routes/booking/booking_tpl.html',
          controller: 'BookingCtrl'
        });
    }]);

    firebase.initializeApp(config);

}());
