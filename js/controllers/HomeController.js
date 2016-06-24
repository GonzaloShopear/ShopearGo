(function() {

	angular.module('ShopearGo')
	.controller('HomeCtrl', ['$scope', HomeCtrl])

	function HomeCtrl ($scope) {
		$scope.downloadDisabled = true;
	};
	
})();

