;'use strict';

(function(){
    angular
        .module('app')
        .controller('Map', Map)
    ;


    Map.$inject = ['$log', '$sce', '$scope', '$timeout'];

    function Map($log, $sce, $scope, $timeout){
        var map = this
            ;

        map.src = $sce.trustAsResourceUrl('http://maps.rosreestr.ru/PortalOnline/?l=5&x=4939924.063650749&y=7362998.703595956&mls=map|anno&cls=cadastre')

        $scope.$emit('mapLoaded', true);

        $scope.$on('searchQuery', function(e, v){
            map.data = v.data;
            map.src = $sce.trustAsResourceUrl(v.url);

            $timeout(function(){
                $scope.$emit('mapLoaded', true);
            }, 1000);
        });
    }
})();