var users=require("./users.mockup.json");
module.exports=function(app){

	var api={
		createUser : createUser,
		findUsersAll: findUsersAll,
		findUserById: findUserById,
		findUserByAccount: findUserByAccount,
		findUserByCredentials: findUserByCredentials,
		updateUserById: updateUserById,
		deleteUserById: deleteUserById
	};

	return api;

	function createUser(user){
		users.push(user);
		return user;
	}

	function findUsersAll(){
		return users;
	}

	function findUserById(id){
		var userById={};
		for(var i=0;i<users.length;i++){
				if(users[i].id==id){
					userById=users[i];
					break;
				}
		}
		return userById;
	}

	function findUserByAccount(account){
		var userByAccount={}
		for (var i=0; i<users.length; i++){
			if (users[i].account==acount){
					userByAccount=users[i];
					break;
			}
		}
		return userByAccount;
	}

	function findUserByCredentials(credentials){
		var userByCredentials={}
		for (var i=0; i<users.length;i++){
			if (users[i].username == credentials.username
			&& users[i].activation==credentials.activation)
				{
					userByCredentials=users[i];
					break;
				}
		}
		return userByCredentials;
	}


	function updateUserById(id,updatedUser){
		for(var i=0;i<users.length;i++)
		{
				if(users[i].id==id){
						updatedUser.id = id;
						users[i] = updatedUser;
						break;
				}
		}
		return updatedUser;
	}

	function deleteUserById(id){
		for(var i=0;i<users.length;i++)
		{
				if(users[i].id==id){
						users.splice(i,1);
						break;
				}
		}
		return users;
	}

}
