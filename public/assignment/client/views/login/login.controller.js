// login controller

(function(){
	  angular
		.module("FormBuilderApp")
		.controller("LoginController", LoginController);
})();

//////////////////////////////////////////////////////////////////////

function LoginController($scope, $rootScope, $location, UserService){
	$scope.login = function (){

		password = $scope.password;
		username = $scope.username;


		UserService.findUserByUsernameAndPassword(username, password)
			.then(function(user){
			if(user === null){
				alert("Sorry, incorrect username or password");
			}
			else{
				$rootScope.user = user;
				$location.path('/profile');
			}
		})
	}
}
