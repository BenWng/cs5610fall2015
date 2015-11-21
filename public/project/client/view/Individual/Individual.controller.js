(function(){
	  angular
		.module("BlogApp")
		.controller("individualController", individualController);
})();


/*function homeController($scope,$rootScope,PostService){
	var model=this;
	model.posts=PostService.findPostsAll();

}*/


function individualController($scope,$rootScope, $routeParams){

	$scope.post=window.data.posts.filter(function(x){
		return x.id===$routeParams.id;
	})[0];

	$scope.youtubeUrl="http://www.youtube.com/embed/"+$scope.post.youtube+"?autoplay=0";


	//console.log($scope.post);
}