(function() {
  "use strict";

  angular
    .module('app')
    .directive('mapYa', mapYa)
    .directive('rawHtml', rawHtml);

  mapYa.$inject = ['$document', '$window'];

  function mapYa($document, $window) {
    return {
      restrict: 'M',
      replace: true,
      template: '<div id="map_ya" class="b-aside__map b-bank__map">Загрузка карты…</div>',
      link: function($scope, el, attrs) {
        "use strict";
        var geo = attrs.mapYa.replace(' ', '').split(',');

        if (!angular.isArray(geo) || !geo[1]) {
          return;
        }

        function buildMap() {
          $window.ymaps.ready(function() {
            $document[0].getElementById('map_ya').innerHTML = '';

            var map = new $window.ymaps.Map('map_ya', {
              center: geo,
              zoom: 15,
              type: "yandex#map",
              behaviors: ['default', '-scrollZoom']
            });

            map.controls.add("mapTools").add("zoomControl").add("typeSelector");

            var m = new $window.ymaps.GeoObject({
              geometry: {
                type: "Point",
                coordinates: geo
              }
            });

            map.geoObjects.add(m);
          });
        }

        if (!$window.ymaps) {
          yepnope.injectJs("https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU&coordorder=longlat", buildMap, {
            charset: "utf-8"
          }, 5000);
        } else buildMap();
      }
    }
  }

  //ngBingHtmlUnsafe.$inject = ['$compile'];
  //
  //function ngBingHtmlUnsafe($compile) {
  //    return function(scope, elm, attrs) {
  //        scope.$watch(attrs.angularHtmlBind, function(newValue, oldValue) {
  //            if (newValue && newValue !== oldValue) {
  //                elm.html(newValue);
  //                $compile(elm.contents())(scope);
  //            }
  //        });
  //    };
  //}

  function rawHtml() {
    return function(scope, element, attr) {
      scope.$watch(attr.rawHtml, function() {
        element.html(scope.$eval(attr.rawHtml));
      })
    };
  }
})();
