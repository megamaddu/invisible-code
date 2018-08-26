app.controller("OuterController", function($scope) {
  $scope.outer = "From the outside";
});

app.controller("InnerController", function($scope) {
  $scope.inner = "looking in.";
});

// credit: https://blog.carbonfive.com/2014/02/11/angularjs-scopes-an-introduction/
