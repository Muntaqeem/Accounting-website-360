/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('SingleProductController', function($scope,$rootScope, baseSvc,$stateParams){

	home = this;
	
	var id = $stateParams.obj;
	
	$rootScope.showSearchBar = false;
	home.imgBase = "http://soft360d.com/accountingManagement/uploads/images/";
	
	home.getProduct = function()
	{
		baseSvc.get("indivisual/product?id="+id)
			.then(function(response){
				home.product = response;
				//console.log(home.product);
			});
	}
	
	home.getProduct();


})