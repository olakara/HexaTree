(function () {
    'use strict';

    function demoController($scope) {

        console.log('Running demo controller...');
        
        $scope.sampleData = [{
            label: 'Earth',
            children: [{
                label: 'Asia',
                children: [{
                    label: 'Afghanistan'
                },{
                    label: 'India',
                    children: [{
                        label: 'New Delhi'   
                    },{
                        label: 'Kerala',
                        children: [{
                            label: 'Trivandrum'
                        }]
                    },{
                        label: 'Tamil Nadu',
                        children: [{
                            label: 'Chennai'
                        }]
                    },{
                        label: 'Punjab'
                    }]
                },{
                    label: 'Pakistan'
                },{
                    label: 'United Arab Emirates',
                    children: [{
                        label: 'Abu Dhabi'
                    },{
                        label: 'Dubai'
                    },{
                        label: 'Fujairah'
                    },{
                        label: 'Sharjah'
                    }]
                }]
            },{
                label: 'Europe',
                children: [{
                    label: 'United Kingdom'
                },{
                    label: 'France',
                    children: [{
                        label: 'Paris'
                    }]
                },{
                    label: 'Spain'
                }]
            },{
                label: 'Africa',
                children: [{
                    label: 'Algeria'
                },{
                    label: 'Morocco'
                },{
                    label: 'Tunis'
                }]
            },{
                label: 'North America',
                children: [{
                    label: 'Canada'
                },{
                    label: 'United States of America'
                },{
                    label: 'Mexico'
                }]
            },{
                label: 'South America',
                children: [{
                    label: 'Brazil',
                    children: [{
                        label: 'São Paulo'
                    },{
                        label: 'Rio de Janeiro'
                    },{
                        label: 'Minas Gerais'
                    },{
                        label: 'Pará'
                    },{
                        label: 'Maranhão'
                    }]
                },{
                    label: 'Argentina'
                },{
                    label: 'Peru'
                }]
            }]
        }]
        $scope.outputObject = {};
    }

     angular.module('demo', ['hexa']).controller('demoController', demoController);
})();
