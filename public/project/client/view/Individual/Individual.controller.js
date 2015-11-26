(function(){
	  angular
		.module("BlogApp")
		.controller("individualController", individualController);
})();


/*function homeController($scope,$rootScope,PostService){
	var model=this;
	model.posts=PostService.findPostsAll();

}*/


function individualController($scope,$rootScope, $routeParams,PostService){

	//$scope.post=$rootScope.posts.filter(function(x){
	//		return x.id===$routeParams.id;
	//	})[0];
	//}

	PostService.findPostById($routeParams.id)
				.then(function(res){
			$scope.post=res.data;
			//$rootScope.posts=$scope.posts;
					console.log($scope.post);
					$scope.allowEdit=$rootScope.currentUser.id==$scope.post.userId;
					});









	//$scope.youtubeUrl="http://www.youtube.com/embed/"+$scope.post.youtube+"?autoplay=0";


	//console.log($scope.post);
}
