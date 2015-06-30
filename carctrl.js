var myApp=angular.module("myApp",[]);

myApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('(~');
	$interpolateProvider.endSymbol('~)');
});

myApp.controller("SpecialListCtrl",function($scope)
{
	$scope.specialList=[

		 {name:"apple",priceRupees:"100",group:"Fruits"},
		 {name:"orange",priceRupees:"100",group:"Fruits"},
		{name:"cherry",priceRupees:"300",group:"Fruits"},
		 {name:"guava",priceRupees:"50",group:"Fruits"},
		{name:"milk",priceRupees:"50",group:"dairy"},
		 {name:"cucumber",priceRupees:"50",group:"vegetable"},
		 {name:"I am king of fruits",priceRupees:"50",group:"vegetable"},
	];

	$scope.selectedFoodGroup="";


	$scope.description="This contains a list of special foods.";

});


myApp.filter("dashes",function(){

return function(text)
		{

			var chars=text.split("");
			return chars.join('-');
		}
});




myApp.controller("myctrl",function($scope){

	$scope.model={
			"firstname":"john",
			"lastname":"doe",
			"dob":{
				"month":"feb",
				"day":"1",
				"year":"1981"
			} 

	};

	$scope.thedate= Date.now();
});

