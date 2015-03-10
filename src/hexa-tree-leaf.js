(function () {

    'use strict';
    
    function hexaTreeLeaf($compile) {

        return {
            restrict: 'E',
            replace: true,
            scope: {
                nodeData: '='
            },
            template: '<li>'+                      
                      '<i ng-if="!isNodeOpen(nodeData)" ng-hide="!nodeHaveChildren(nodeData)" class="hex-tree-node-icon fa fa-folder-o" ng-click="toggleTreeNode(nodeData)"></i>'+
                      '<i ng-if="isNodeOpen(nodeData)" ng-hide="!nodeHaveChildren(nodeData)" class="hex-tree-node-icon fa fa-folder-open-o" ng-click="toggleTreeNode(nodeData)"></i>' +
                      '<i ng-if="!nodeHaveChildren(nodeData)" class="hex-tree-node-icon fa fa-file-o"></i>'+                        
                      '<a href="#" class="hexa-tree-node-label" ng-click="onNodeLabelClick(nodeData)">{{nodeData.label}}</a>' +
                      '</li>',

            controller: function($scope) {
                    
                    $scope.isNodeOpen = function(nodeData) {
                        return !nodeData.folderClosed;
                    };                
                
                    $scope.nodeHaveChildren = function(nodeData) {
                        if(nodeData.children && nodeData.children.length > 0)
                            return true;
                        else 
                            return false;
                    };
                
                    $scope.toggleTreeNode = function(nodeData) {
                        nodeData.folderClosed = !nodeData.folderClosed;
                    };               
                
                    $scope.onNodeLabelClick = function(nodeData) {
                        $scope.$emit('NodeLabelClickEvent',nodeData);
                    };
                    
            },
            link: function(scope,element,attrs) {

                scope.nodeData.folderClosed = true;

                if(angular.isArray(scope.nodeData.children)) {
                    element.append("<hexa-tree-node tree-data='nodeData.children' ng-show='!nodeData.folderClosed' ng-hide='nodeData.folderClosed'></hexa-tree-node>");
                    $compile(element.contents())(scope);
                }
            }
        };
    }
    
    angular.module('hexa').directive('hexaTreeLeaf',hexaTreeLeaf);

})();