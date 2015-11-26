(function(){
	angular
	.module("BlogApp")
	.factory("PostService",PostService);


	function PostService($rootScope,$q,$http){

		var service={
			createPost: createPost,
			findPostsAll: findPostsAll,
			findPostById: findPostById,
			findPostsByUserId: findPostsByUserId
		}

		return service;

		function findPostsAll(searchText){
			return $http.get("/api/project/post?searchText="+searchText);
		}

		function findPostById(id){
			return $http.get("/api/project/post/id/"+id);
		}

		function findPostsByUserId(userId){
			return $http.get("/api/project/post/user/"+userId);
		}

		function createPost(post){
			return $http.post("/api/project/post",post);
		}
	}


})();