angular.module('shortly.shorten', [])

.controller('ShortenController', function($scope, $location, Links) {
  $scope.link = {};
  $scope.submitLink = function() {
    Links.addOne($scope.link).then(function(response) {
      $location.path('/links');
    });
  };
});
