/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('SingleProductController', function($scope, baseSvc,$stateParams){

	home = this;
	
	var id = $stateParams.obj;
	
	home.imgBase = "http://soft360d.com/accountingManagement/uploads/images/";

	home.selectCategory = function(id)
	{
		baseSvc.get("subcategory/product?id="+id)
			.then(function(response){
				
				home.products = response;
				console.log(home.products);
				
			});
	}

	home.selectCategory();

	home.getProducts = function(){
		$state.go('home');
	}
	
	
	
	$scope.getCategories = function(){
		baseSvc.get("categories")
			.then(function(response){
				home.categories = response;
				console.log(home.categories);
			});
	}
	$scope.getCategories();
	
	home.getProduct = function()
	{
		baseSvc.get("indivisual/product?id="+ id)
			.then(function(response){
				home.product = response;
				console.log(home.product);
			});
	}
	
	home.getProduct();


})