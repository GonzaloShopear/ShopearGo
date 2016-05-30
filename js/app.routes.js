(function() {

	angular.module('ShopearGo')
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl',
				data: {
                      private: false
                    }
			})
			.otherwise({
				redirectTo: '/'
			})
	})

})();
