/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('HomeController', function($scope, $rootScope, $state, $http, baseSvc){
	
	home = this;
	$scope.getProducts = function(){
		baseSvc.get("available/products")
			.then(function(response){
				home.products = response;
				console.log(home.products);
			});
	}
	$scope.getProducts();
	
	
	home.singleProduct = function(item){
		
		console.log(item);
		$state.go('singleProduct', {obj : {id:item.id}});
	}
})