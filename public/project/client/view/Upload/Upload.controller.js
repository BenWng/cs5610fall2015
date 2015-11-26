(function(){
	  angular
		.module("BlogApp")
		.controller("uploadController", uploadController);
})();


function uploadController($scope,$rootScope,$location,$routeParams,PostService,UserService){

	var postId=$routeParams.id;

	console.log(postId);

	if (postId) {
		PostService.findPostById(postId)
				.then(function (res) {
					$scope.post = res.data;
					console.log($scope.post);
				});
	};



	$scope.submitPost=function(){
		return UserService.createPost($scope.post)
		.then(function(){
			$location.path("/home");
		})
	}
}