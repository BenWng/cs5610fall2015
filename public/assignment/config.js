(function(){
	angular
		.module("FormBuilderApp")
		.config(Configuration)
	
	
	function Configuration ($routeProvider) 
	{
		$routeProvider
			.when('/home', {
				templateUrl:  './home/home.view.html',
			})
			.when('/register', {
				templateUrl:  './register/register.view.html',
				controller: 'RegisterController'
			})
			.when('/login', {
				templateUrl:  './login/login.view.html',
				controller: 'LoginController'

			})
			.when('/profile', {
				templateUrl:  './profile/profile.view.html',
				controller:'ProfileController',
			})
			.when('/admin', {
				templateUrl:  './admin.html',
				//controller:'AdminController',
			})
			.when('/forms', {
				templateUrl:  './form/form.view.html',
				controller:'FormController',
			})
			.when('/form-fields', {
				templateUrl:  './form-fields.html',
				//controller:'FormFieldsController',
			})
			.otherwise({
				redirectTo:'/home'
			})
			
	}
})();
