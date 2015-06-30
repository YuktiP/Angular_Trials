var myApp=angular.module("myApp",[]);



myApp.controller("OuterCtrl",function($scope){
	$scope.val1="yukti";

	$scope.val2={name:"John"};
})


myApp.controller("InnerCtrl",function($scope){
	
})
