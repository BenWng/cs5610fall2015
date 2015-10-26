//register controller
(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("RegisterController", RegisterController);
})();

////////////////////////////////////////////////////////////////////
function RegisterController($scope, $rootScope, $location, UserService){
	$scope.register = function (){
	
		user = $scope.user;
		if(user.password != user.confirmPassword)
			alert("Check password!")
		else{
			delete user['confirmPassword'];
			UserService.createUser(user, 
			function(user){
				$rootScope.user = user;
				$location.path('/profile');
			})
		}
	}
}

