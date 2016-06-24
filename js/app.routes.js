/*(function() {

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
			.when('/como-funciona', {
				templateUrl: 'views/how.html',
				controller: 'HowCtrl',
				data: {
					private: false
				}
			})
			.when('/plataforma', {
				templateUrl: 'views/platform.html',
				controller: 'HomeCtrl',
				data: {
					private: false
				}
			})
			.when('/contacto', {
				templateUrl: 'views/contact.html',
				controller: 'HomeCtrl',
				data: {
					private: false
				}
			})
			.when('/terminos', {
				templateUrl: 'views/terms.html',
				data : {
					private: false
				}
			})
			.otherwise({
				redirectTo: '/'
			})
	})

})();
*/