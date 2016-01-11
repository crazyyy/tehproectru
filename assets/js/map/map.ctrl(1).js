;
'use strict';

(function() {
  angular
    .module('app')
    .controller('Map', Map);


  Map.$inject = ['$log', '$sce', '$scope', '$timeout'];

  function Map($log, $sce, $scope, $timeout) {
    var map = this;
    var kad_code = window.location.search.substr(1);
    map.src = $sce.trustAsResourceUrl('http://maps.rosreestr.ru/PortalOnline/?l=5&x=4939924.063650749&y=7362998.703595956&mls=map|anno&cls=cadastre')

    $scope.$emit('mapLoaded', true);

    $scope.$on('searchQuery', function(e, v) {
      map.data = v.data;
      map.src = $sce.trustAsResourceUrl(v.url);

      $timeout(function() {
        $scope.$emit('mapLoaded', true);
      }, 1000);
    });
    if (kad_code) {
      $timeout(function() {
        var inp_search = document.getElementsByClassName('b-search__query');
        inp_search[0].setAttribute('placeholder', kad_code);
        inp_search[0].className = inp_search[0].className + " black_placeholder";
        inp_search[0].setAttribute('value', kad_code);
        $("input.b-search__query").sendkeys(kad_code);
      }, 500);
      $timeout(function() {
        $(".b-search__submit").trigger('click');
      }, 1000);
    };
  }
})();
$(document).ready(function() {
  var client2 = new ZeroClipboard($("#copy-dynamic"), {
    moviePath: "/js/ZeroClipboard.swf"
  });

  client2.on("load", function(client2) {
    client2.on("complete", function(client2, args) {
      // client2.setText(this.TextContent); // Это для текстового поля (можно не прописывать)
      // client2.setText(this.innerHTML); // Или для блока DIV (можно не прописывать)
      alert('Ссылка скопирована в буфер обмена!');
    });
  });
  /*setInterval(function(){$("input#query11").val('http://kadastrmap.ru/?'+kad_code);}, 500);*/
});
