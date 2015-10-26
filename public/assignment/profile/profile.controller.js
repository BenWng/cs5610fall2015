//Profile controller


(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("ProfileController", ProfileController);
})();

////////////////////////////////////////////////////////////////////////
function ProfileController($scope, $rootScope, $location, UserService){
	var user = $rootScope.user;
	$scope.user = user; 
	$scope.update = function (user){

		UserService.updateUser(user.id, user, 
			function(user){
				if(user == null)
					alert("No record")
				else{
					$rootScope.user = user;
				}
		})
	}
}
