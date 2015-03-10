(function () {
    'use strict';
    
    function hexaTreeNode() {
    
        var nodeTemplate = '<ul class="hexa-tree-node"><hexa-tree-leaf ng-repeat="node in treeData" node-data="node"></hexa-tree-leaf></ul>';
        
        return {
            restrict: 'E',
            replace: true,
            template: nodeTemplate,
            scope: {
                treeData: '=',
                treeOptions: '=',
                treeOutput: '='
            },
            controller: function($scope) {
                
            }
        };
        
    }
    
    angular.module('hexa').directive('hexaTreeNode',hexaTreeNode);
    
})();