/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('HomeController', function($scope, $rootScope, $state, $http, baseSvc){
	
	home = this;
	home.imgBase = "http://soft360d.com/accountingManagement/uploads/images/";
	home.getProducts = function(){
		baseSvc.get("available/products")
			.then(function(response){
				home.products = response;
				console.log(home.products);
			});
	}
	home.getProducts();
	
	
	$scope.getCategories = function(){
		baseSvc.get("categories")
			.then(function(response){
				home.categories = response;
				console.log(home.categories);
			});
	}
	$scope.getCategories();
	
	
	home.singleProduct = function(item){
		
		console.log(item);
		$state.go('singleProduct', {obj : {id:item.id}});
	}
	
	home.selectCategory = function(id)
	{
		baseSvc.get("subcategory/product?id="+id)
			.then(function(response){
				
				home.products = response;
				console.log(home.products);
				
			});
	}
	
	
})