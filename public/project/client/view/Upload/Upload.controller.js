(function(){
	  angular
		.module("BlogApp")
		.controller("uploadController", uploadController);
})();


function uploadController($scope,$rootScope,$location,$routeParams,PostService,UserService){

	$scope.currentUserId=$rootScope.currentUser._id;
	$scope.currentUserName=$rootScope.currentUser.Name;

	$scope.uploadNewPost=function(){
		$scope.post.userId=$scope.currentUserId;
		//$scope.post.author=$scope.currentUserName;
		$scope.tagsArray=$scope.post.tags.split(',');
		$scope.post.tags=$scope.tagsArray;
		PostService.createPost($scope.post)
		.then(function(){
			$location.path("/home");
		})
	}
}