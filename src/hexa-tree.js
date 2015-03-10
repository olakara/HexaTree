(function () {
    'use strict';
    
    angular.module('hexa',[]);
    
    function hexaTree() {
    
        var treeTemplate = '<div><hexa-tree-node tree-data="data" tree-options="options"></hexa-tree-node></div>';
        
        return {
            restrict: 'E',
            replace: true,
            template: treeTemplate,
            scope: {
                data: '=treeData',
                options: '=treeOptions',
                output: '=treeOutput'
            },
            controller: function($scope) {
            
                $scope.$on('NodeLabelClickEvent', function(event, node) {
                    
                    $scope.output.selected = node;
                });
            }
        };
    }
    
    angular.module('hexa').directive("hexaTree",hexaTree);
    
})();