(function(){
	  angular
		.module("BlogApp")
		.controller("homeController", homeController);
})();


/*function homeController($scope,$rootScope,PostService){
	var model=this;
	model.posts=PostService.findPostsAll();

}*/


function homeController($scope,$rootScope){
	$scope.posts= window.data.posts;

}