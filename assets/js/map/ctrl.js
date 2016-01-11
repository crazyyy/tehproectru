(function() {
  "use strict";

  angular
    .module('app')
    .controller('App', App)
    .controller('Index', Index)
    .controller('Result', Result);


  App.$inject = ['$scope', 'Metrika', 'e'];

  function App($scope, Metrika, e) {
    var app = this;

    app.Metrika = Metrika;
    app.e = e;

    $scope.$on('mapLoaded', function() {
      app.mapLoaded = true;
    });
  }


  Index.$inject = ['$window', 'Mixpanel'];

  function Index($window, Mixpanel) {

  }


  Result.$inject = ['$scope'];

  function Result($scope) {
    var result = this;

    $scope.$on('searchQuery', function(e, v) {
      result.data = v.result;
    });
  }
})();
