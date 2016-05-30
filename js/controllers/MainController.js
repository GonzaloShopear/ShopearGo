(function() {

	angular.module('ShopearGo')
	.controller('MainCtrl', ['$scope', 'TamersFactory', MainCtrl])

	function MainCtrl ($scope, TamersFactory) {

		/*TamersFactory.success(function(data) {
			$scope.tamers = data;
		});*/

		$scope.tamers = TamersFactory;

	};
	
})();

