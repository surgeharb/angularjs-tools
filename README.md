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

3. Add the directive to the html page where you want to set stars
```html
<star-rating value=3 max=5 edit=true color="#000000"></star-rating>
```
