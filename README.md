# angularjs-tools
AngularJS 1.x helper tools

## Star Rating Directive

#### You have the ability to set static stars or user editable stars
![alt text](http://files.sergeharb.com/angular-tools/stars2.PNG "Stars")
![alt text](http://files.sergeharb.com/angular-tools/stars1.PNG "Stars")

To get your directive working:

1. Include the javascript code after your angular module initialization
```javascript
var app = angular.module('myApp', []);
//given code in star-rating.js
app.directive('starRating', [function () {
  //code that you are not supposed to modify
}]);
```

2. Include the directive style star-rating.scss in your main scss file
```scss
@import 'assets/directives/star-rating/star-rating.scss'
```

3. Add the directive to the html page where you want to set stars after importing Google Material Icons
```html
<!-- Add the link tag because we are using Google Material Icons for the stars display -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<!-- All the parameters are optional -->
<!-- defaults value:0, max:5, edit:false, color:#f5a623 -->
<star-rating value=3 max=5 edit=true color="#000000"></star-rating>
```
