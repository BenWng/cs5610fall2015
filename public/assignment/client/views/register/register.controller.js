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

			UserService.createUser(newUser)
			 	.then(function(users){
					for(var i=0; i<users.length; i++) {
						if(newUser.username == users[i].username && newUser.password == users[i].password)
							{
								$rootScope.user = users[i];
								$location.path('/profile');
							}
						}
			})
		}
	}
}
