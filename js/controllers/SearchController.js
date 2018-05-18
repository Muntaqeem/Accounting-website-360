/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('SearchController', function($scope, $rootScope, $state, $http, baseSvc,$stateParams){
	
	home = this;
	var text = $stateParams.text;
	home.imgBase = "http://soft360d.com/accountingManagement/uploads/images/";
	home.getProducts = function(){
		baseSvc.get("search?text="+text)
			.then(function(response){
				home.products = response;
				console.log(home.products);
			});
	}
	
	
	home.get = function(){
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
		home.get();
		
		
	}
	
	else
	{
		home.selectCategory(id);
	}

	
})