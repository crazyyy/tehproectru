;
'use strict';

(function() {

  angular
    .module('app')
    .controller('ContactUs', ContactUs);


  ContactUs.$inject = ['$http', '$scope', '$window'];

  function ContactUs($http, $scope, $window) {
    var vm = this;

    vm.form = {};
    vm.isValid = isValid;
    vm.regexp = {
      email: $window.EMAIL_REGEXP
    };
    vm.reset = reset;
    vm.submit = submit;

    (function() {
      var form = amplify.store('contactUsForm');

      if (form) {
        vm.form = form;
      }
    })();

    $scope.$watch('vm.form', function(form) {
      amplify.store('contactUsForm', form)
    }, true);


    function isValid() {
      return $scope.contactUsForm.$valid;
    }

    function reset() {
      $scope.contactUsForm.$setDirty();
    }

    function submit() {
      if (!vm.isValid()) {
        $scope.contactUsForm.$setDirty();

        return false;
      }

      vm.processing = true;

      $http
        .post($window.routs.contact_us, $.extend({
          act: 'msg'
        }, vm.form))
        .success(function(res) {
          vm.processing = false;
          vm.sent = true;
        });
    }
  }

})();
