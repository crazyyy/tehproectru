!function(){"use strict";function n(n,e,t){var o=this;o.Metrika=e,o.e=t,n.$on("mapLoaded",function(){o.mapLoaded=!0})}function e(n,e){}function t(n){var e=this;n.$on("searchQuery",function(n,t){e.data=t.result})}angular.module("app").controller("App",n).controller("Index",e).controller("Result",t),n.$inject=["$scope","Metrika","e"],e.$inject=["$window","Mixpanel"],t.$inject=["$scope"]}();