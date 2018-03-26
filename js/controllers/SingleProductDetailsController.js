/**
 * Created by mgmuntaqeem on 23/3/18.
 */
myApp.controller('SingleProductController', function($scope, baseSvc,$stateParams){

	home = this;
	
	console.log($stateParams);
	
	var id = $stateParams.obj.id;
	
	console.log(id);
	
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