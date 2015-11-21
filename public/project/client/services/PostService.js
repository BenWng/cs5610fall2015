(function(){
	angular
	.module("BlogApp")
	.factory("PostService",PostService);


	function PostService($rootScope,$q,$http){

	var service={
		findPostsAll: findPostsAll
	}

	return service;

	function findPostsAll(){
		var deferred=$q.defer();
		$http.get("api/project/post")
			.success(function(posts){
				deferred.resolve(posts);
			});
		return deferred.promise;
	}



	}


})