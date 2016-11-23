var helloWorldApp = angular.module("helloWorldApp", []);

helloWorldApp.constant("myConfig", {applicationName:"My AngularJS App"});

helloWorldApp.controller("firstController",[
    "$scope", "myConfig",
    function($scope, myConfig) {
        $scope.appName = myConfig.applicationName;
    }
]);
