myApp.controller("appController",function($scope){

	$scope.firstname="john";
	$scope.lastname="doe";

	$scope.setName=function($fname,$lname){

		$scope.firstname=$fname;
		$scope.lastname=$lname;
	}

});

myApp.controller("divideController",function($scope){
	$scope.numberData={
		val1:1,
		val2:1
	};

	$scope.divide=function(val1,val2){

		window.alert(val1/val2);
	}

});
