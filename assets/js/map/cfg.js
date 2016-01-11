(function() {
  "use strict";

  angular
    .module('app')
    .config(interpolateProvider)
    .config(httpProvider);


  httpProvider.$inject = ['$httpProvider', '$provide'];

  function httpProvider($httpProvider, $provide) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
      /**
       * The workhorse; converts an object to x-www-form-urlencoded serialization.
       * @param {Object} obj
       * @return {String}
       */
      var param = function(obj) {
        var query = '';
        var name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
          value = obj[name];

          if (value instanceof Array) {
            for (i = 0; i < value.length; ++i) {
              subValue = value[i];
              fullSubName = name + '[' + i + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          } else if (value instanceof Object) {
            for (subName in value) {
              subValue = value[subName];
              fullSubName = name + '[' + subName + ']';
              innerObj = {};
              innerObj[fullSubName] = subValue;
              query += param(innerObj) + '&';
            }
          } else if (value !== undefined && value !== null) {
            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
          }
        }

        return query.length ? query.substr(0, query.length - 1) : query;
      };

      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];


    $provide.factory('HttpInterceptor', HttpInterceptor);

    $httpProvider.interceptors.push('HttpInterceptor');


    HttpInterceptor.$inject = ['$q', '$rootScope'];

    function HttpInterceptor($q, $rootScope) {
      return {
        // optional method
        'request': function(config) {
          // do something on success

          processing(1);

          return config;
        },

        // optional method
        'requestError': function(rejection) {
          processing(0);

          // do something on error
          //if (canRecover(rejection)) {
          //    return responseOrNewPromise
          //}
          return $q.reject(rejection);
        },



        // optional method
        'response': function(response) {
          processing(0);

          // do something on success
          return response;
        },

        // optional method
        'responseError': function(rejection) {
          processing(0);

          // do something on error
          //if (canRecover(rejection)) {
          //    return responseOrNewPromise
          //}
          return $q.reject(rejection);
        }
      };

      function processing(state) {
        $rootScope.$emit('processing', !!state);
      }
    }
  }


  interpolateProvider.$inject = ['$interpolateProvider'];

  function interpolateProvider($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
})();
