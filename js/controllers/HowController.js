(function() {

	angular.module('ShopearGo')
	.controller('HowCtrl', ['$scope', '$location', '$anchorScroll', HowCtrl])

	function HowCtrl ($scope, $location, $anchorScroll) {
		$scope.scrollTo = function(id) {
			$location.hash(id);
			$anchorScroll();
		}
	};
	
})();

