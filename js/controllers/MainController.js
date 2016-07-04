(function() {

	angular.module('ShopearGo')
	.controller('MainCtrl', ['$scope', '$location', '$anchorScroll', MainCtrl])

	function MainCtrl ($scope, $location, $anchorScroll) {
		$scope.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		}
	};
	
})();

