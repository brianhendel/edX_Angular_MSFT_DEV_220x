var app = angular.module("testApp",[])

app.controller("testController", function($scope, testConstant) {
    $scope.test = "Hello!";
    $scope.constant = testConstant
})

app.constant("testConstant", "Constant Value")