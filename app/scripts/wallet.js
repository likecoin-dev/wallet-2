'use strict';

angular.module('wallet', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'WalletCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
