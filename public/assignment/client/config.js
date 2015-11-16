(function(){
	angular
		.module("FormBuilderApp")
		.config(Configuration)


	function Configuration ($routeProvider)
	{
		$routeProvider
			.when('/home', {
				templateUrl:  'views/home/home.view.html',
			})
			.when('/register', {
				templateUrl:  'views/register/register.view.html',
				controller: 'RegisterController'
			})
			.when('/login', {
				templateUrl:  'views/login/login.view.html',
				controller: 'LoginController'

			})
			.when('/profile', {
				templateUrl:  'views/profile/profile.view.html',
				controller:'ProfileController',
			})
			.when('/admin', {
				templateUrl:  'views/admin/admin.view.html',
				//controller:'AdminController',
			})
			.when('/forms', {
				templateUrl:  'views/form/form.view.html',
				controller:'FormController',
			})
			.when('/user/:userId/form/:formId/fields', {
				templateUrl:  'views/field/field.view.html',
				controller:"FieldController"
			})
			.otherwise({
				redirectTo:'/home'
			})

	}
})();
