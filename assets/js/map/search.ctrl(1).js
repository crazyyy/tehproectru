;
'use strict';

(function() {
  angular
    .module('app')
    .controller('Search', Search);


  Search.$inject = ['$log', '$http', '$interval', '$rootScope', '$timeout'];

  function Search($log, $http, $interval, $rootScope, $timeout) {
    var search = this

    , progressInterval, timeout_toHideHelp_instance
    ;

    search.exampleQuery = '77:02:0016009:32';
    search.form = {};
    search.setExample = setExample;
    search.submit = submit;
    search.toggleShowHelp = toggleShowHelp;



    function setExample() {
      search.form.query = search.exampleQuery;
    }

    function setProgress(val) {
      search.progress = parseInt(val) + '%';
    }

    function submit() {
      search.processing = true;
      var progress = 0;

      if (progressInterval) {
        $interval.cancel(progressInterval);
      }

      progressInterval = $interval(function() {
        setProgress(++progress);

        if (100 === progress) {
          progress = 1;
        }
      }, 200);

      $http
        .post(window.routs.api.kadastr_num, {
          num: search.form.query
        })
        .success(function(resp) {
          if (!resp.features || !resp.features[0]) {
            return search.err = 'Введите корректный номер участка';
          }

          search.result = resp.features[0].attributes;

          //document.getElementsByTagName('iframe')[0]._map._extentUtil({targetLevel:11})

          $rootScope.$broadcast('searchQuery', {
            url: 'http://maps.rosreestr.ru/PortalOnline/?l=8&mls=map|anno&cls=cadastre&cn=' + search.form.query,
            result: search.result
          });

          search.processing = false;

          setProgress(0);

          if (progressInterval) {
            $interval.cancel(progressInterval);
          }
        });
      if (search.form.query) {
        parent.history.pushState('', '', '?' + search.form.query);
        $("input#query11").val('http://kadastrmap.ru/?' + search.form.query);
      }
    }

    function toggleShowHelp(show) {
      search.show_help_icon = show ? true : !search.show_help_icon;

      if (search.show_help_icon) {
        if (timeout_toHideHelp_instance) {
          $timeout.cancel(timeout_toHideHelp_instance);
        }

        timeout_toHideHelp_instance = $timeout(function() {
          search.show_help_icon = false;
        }, 3000);
      }
    }
  }
  submit();
})();
