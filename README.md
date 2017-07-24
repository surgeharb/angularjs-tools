# angularjs-tools
AngularJS 1.x helper tools

## Star Rating Directive

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
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- All the parameters are optional -->
<!-- defaults value:0, max:5, edit:false, color:#f5a623 -->
<star-rating value=3 max=5 edit=true color="#000000"></star-rating>
```
 4. IMPORTANT!! If you are not using MaterializeCss
 ```html
 <!-- star-rating.html modification -->
 <ul class="rating">
  <li ng-repeat="star in stars" class="star" ng-class="{clickable: edit}" ng-style="{'color': color}" ng-click="toggle($index)">
    <!-- replace all the <i> tags with images of your own while preserving the ng-if condition -->
    <i class="material-icons" ng-if="!star.filled">star_border</i>
    <i class="material-icons" ng-if="star.filled">star</i>
    <!-- -->
  </li>
</ul>
 ```
