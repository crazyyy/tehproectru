;
'use strict';

(function() {
  angular
    .module('app')
    .filter('money', money);

  function money() {
    return function(input) {
      return input ? input.formatMoney(2, '.', ' ') : 0;
    };
  }
})();
