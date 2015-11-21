var posts = require ("./posts.mockup.json");


module.exports = function (app) {

		var api = {
			createPost: createPost,
			updatePostById : updatePostById,
			deletePostById : deletePostById,
			findPostsAll: findPostsAll,
			findPostById: findPostById,
			findPostsByTag: findPostsByTag,
			findPostsByUserId: findPostsByUserId,
		};

		return api;

		function createPost(post){
			posts.push(post);
			return post;
		}

		function updatePostById(id,updatedPost){
			for(var i=0; i<posts.length; i++){
				if(posts[i].id===id){
					updatedPost.id=id;
					updatedPost.userId=posts[i].userId;
					posts[i]=updatedPost;
					break;
				}

			}
			return updatedPost;
		}

		function deletePostById(id){
			for (var i=0;i<posts.length;i++){
				if(posts[i].id==id){
					posts.splice(i,1);
					break;
				}
			}
			return posts;
		}

		function findPostsAll(){
			return posts;
		}

		function findPostById(id){
			var postById={};
			for (var i=0;i<posts.length;i++){
				if(posts[i].id==id){
					postById=posts[i];
					break;
				}
			}
			return postById;
		}

		//To-do: here if the given tag and the existing tag are in different cases(lower and capital),
		//the result would be false, I need to change this
		function findPostsByTag(tag){
			var postsByTag=[];
			for (var i=0;i<posts.length;i++){
				for (var j=0;j<posts[i].tags.length;j++){
					if (posts[i].tags[j]==tag){
						postsByTag.push(posts[i]);
						break;
					}
				}
			}
			return postsByTag;
		}

		function findPostsByUserId(userId){
			var postsByUser = [];
			for(var i=0;i<posts.length;i++){
					if(posts[i].userId==userId){
						postsByUser.push(posts[i]);
					}
			}
			return postsByUser;
		}

}
