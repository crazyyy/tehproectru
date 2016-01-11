(function() {
  "use strict";

  angular
    .module('app')
    .factory('DB', function() {
      return {};
    })
    .factory('Metrika', Metrika)
    .factory('Mixpanel', Mixpanel)
    .factory('Regexp', Regexp);


  Metrika.$inject = ['$window'];

  function Metrika($window) {
    return {
      event: function(target) {
        if (!$window.Ya || !$window.Ya._metrika) {
          return;
        }

        $window.Ya._metrika.counter.reachGoal(target);
      },

      ga: function() {
        $window.ga.apply(this, arguments);
      }
    };
  }



  Mixpanel.$inject = ['$window'];

  function Mixpanel($window) {
    return $window.mixpanel || {
      track: function() {}
    };
  }


  Regexp.$inject = ['Metrika'];

  function Regexp(Metrika) {
    return {
      domain: /^(?!:\/\/)([a-zA-Zа-яА-Я0-9]+\.)?[a-zA-Zа-яА-Я0-9][a-zA-Zа-яА-Я0-9-]+\.[a-zA-Zа-яА-Я]{2,6}?$/i,
      phone_mobile: /^(((\+?7)?9\d{9})|(\+3((75)|(80))\d{9}))$/,
      email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      checkPhone: function(phone) {
        var valid = this.phone_mobile.test(phone);

        if (!valid) {
          Metrika.event('PHONE_INVALID');
        }

        return valid;
      }
    };
  }
})();
