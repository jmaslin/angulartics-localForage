(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.localforage
 * Enables localforage support for analytics event storage and processing
 */
angular
  .module('angulartics.localforage', [
    'angulartics',
    'LocalForageModule'
    ])
    .config(['$analyticsProvider', function ($analyticsProvider) {

      $analyticsProvider.settings.pageTracking.trackRelativePath = true;

      $analyticsProvider.registerPageTrack(function (path) {

      });

      $analyticsProvider.registerEventTrack(function (action, properties) {


      });

      $analyticsProvider.registerExceptionTrack(function (properties) {

      });

      $analyticsProvider.registerSetUsername(function (userId) {

      });

      $analyticsProvider.registerSetUserProperties(function (properties) {

      });

      $analyticsProvider.registerUserTimings(function (properties) {

      });

    }]);

})(window, window.angular);
