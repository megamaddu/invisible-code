app.controller("OuterController", function($scope) {
  $scope.outer = "From the outside";
});

app.controller("InnerController", function($scope) {
  $scope.inner = $scope.outer + "looking in.";
});
