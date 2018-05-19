/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('HomeController', function($scope, $rootScope, $state, $http, baseSvc,$stateParams){
	
	home = this;
	var id = $stateParams.category;
	$rootScope.showSearchBar = false;
	home.imgBase = "http://soft360d.com/accountingManagement/uploads/images/";
	home.getProducts = function(){
		baseSvc.get("available/products")
			.then(function(response){
				home.products = response;
				console.log(home.products);
			});
	}
	
	
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
	if(id==0)
	{
		home.getProducts();
		
		home.errorMessage = "Sorry, no product is available";
		
	}
	
	else
	{
		home.selectCategory(id);
		
		home.errorMessage = "Sorry, no product is available for this category";
	}

	
})