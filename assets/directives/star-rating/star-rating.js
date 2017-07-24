/**
 * @ngdoc directive
 * @name Bridger.directive:starRating
 * @function
 * @description
 **/
app.directive('starRating', [function () {
  return {
    restrict: 'AE',
    templateUrl: 'assets/directives/star-rating/star-rating.html',
    scope: {
      value: '=?',
      max: '=?',
      edit: '=?',
      color: '@?'
    },
    link: function (scope, element, attrs) {

      var updateStars = function () {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            "filled": i < scope.value
          })
        }
      }

      if (!scope.max) {
        scope.max = 5;
      }

      if (!scope.value) {
        scope.value = 0;
      }

      if (!scope.edit) {
        scope.edit = false;
      } else {
        scope.toggle = function (index) {
          scope.value = index + 1;
        }
      }

      if (!scope.color) {
        scope.color = '#f5a623';
      }

      scope.$watch('value', function (oldVal, newVal) {
        if (newVal >= 0) {
          updateStars();
        }
      })

    }
  }
}]);