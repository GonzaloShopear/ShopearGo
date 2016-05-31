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
			.when('/como-funciona', {
				templateUrl: 'views/how.html',
				controller: 'HomeCtrl',
				data: {
					private: false
				}
			})
			.when('/preguntas-frecuentes', {
				templateUrl: 'views/faqs.html',
				controller: 'HomeCtrl',
				data: {
					private: false
				}
			})
			.when('/sobre-nosotros', {
				templateUrl: 'views/about.html',
				controller: 'HomeCtrl',
				data: {
					private: false
				}
			})
			.when('/partners', {
				templateUrl: 'views/partners.html',
				controller: 'HomeCtrl',
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
			.otherwise({
				redirectTo: '/'
			})
	})

})();
