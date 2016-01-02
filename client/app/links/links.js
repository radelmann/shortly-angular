angular.module('shortly.links', [])
  .controller('LinksController', function ($scope, Links) {
    $scope.data = {};
    

    // $scope.getUrls = function($scope) {
      Links.getAll().then(function (data) {
      $scope.data.links = data;
    });
   // };
      //load template ???   
  });