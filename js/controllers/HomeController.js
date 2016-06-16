(function() {

	angular.module('ShopearGo')
	.controller('HomeCtrl', ['$scope', '$location', '$anchorScroll', HomeCtrl])

	function HomeCtrl ($scope, $location, $anchorScroll) {
		$scope.downloadDisabled = true;
	};
	
})();

