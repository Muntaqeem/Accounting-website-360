/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('SearchController', function($scope, $rootScope, $state, $http, baseSvc,$stateParams){
	$rootScope.showSearchBar = true;
	$scope.text = $stateParams.text;
	$scope.imgBase = "http://soft360d.com/accountingManagement/uploads/images/";
	$scope.getProducts = function(text){
		baseSvc.get("search?text="+text)
			.then(function(response){
				$scope.products = response;
				//console.log(home.products);
			});
	}
	
	
	$scope.get = function(){
		baseSvc.get("available/products")
			.then(function(response){
				home.products = response;
				console.log(home.products);
			});
	}
	
	$scope.getProducts($stateParams.text);

	
	$scope.errorMessage = "Sorry, no product is available";
})