(function() {

	angular.module('ShopearGo', ['ngRoute',
 								'ngResource']);

	angular.module('ShopearGo').run(function($rootScope, $location) {
		$('#footer').show();
	});
})();