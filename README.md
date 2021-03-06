# Hexa Tree

 Hexa Tree is a tree control directive for Angular [angularjs](http://www.angularjs.org).

# Output

![treedemo](https://cloud.githubusercontent.com/assets/570905/6583922/a44eff68-c724-11e4-9a56-796baebecdd7.PNG)

# Usage

 In it's simplest form you should be able to get a tree by:
```html
    <hexa-tree tree-data="sampleData" tree-options="" tree-output="outputObject"> </hexa-tree>
```
Parameters:
*  tree-data : JSON data model for the tree
*  tree-options : JSON object for specifying tree options
*  tree-output : Output tree object, that's used to get selected or multiple selected nodes from the tree
A sample model:
  
 ```javascript
$scope.sampleData = [{
    label: 'Earth',
    children: [{
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
    }]
}];
```

# License

The MIT License (MIT)  
Copyright (c) 2015 Abdel Raoof Ahamed Olakara. http://abdelraoof.com
