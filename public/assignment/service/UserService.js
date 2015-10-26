(function(){ 
	  angular
		.module("FormBuilderApp")
		.factory("UserService", UserService)

	////////////////////////////////////////////	
	function UserService(){
		var users = []
		var UserService = {}
		

		////////////////////////////////////////////	
		UserService.findAllUsers = function(callback){
			callback(JSON.parse(JSON.stringify(users)));
		}
		////////////////////////////////////////////	
		UserService.createUser = function(user, callback){
			var newUser = JSON.parse(JSON.stringify(user));
			newUser.id = guid();
			users.push(newUser);
			callback(JSON.parse(JSON.stringify(newUser)));
		}
		////////////////////////////////////////////	
		UserService.findUserByUsernameAndPassword = function(username, password, callback){
			user = null;
			
			for(var i=0; i< users.length; i++){
				if(users[i].username === username 
					&& users[i].password === password){
					user = users[i];
					break;
				}
			}
			callback(JSON.parse(JSON.stringify(user)));
		}

		////////////////////////////////////////////	
		UserService.updateUser = function(id, user, callback){
			for(var i=0; i< users.length; i++){
				if(users[i].id == id){
					delete users[i];
					users[i] = JSON.parse(JSON.stringify(user));
					users[i].id = id;
					callback(JSON.parse(JSON.stringify(users[i])));
					return;
				}
			}
			callback(null);
		}

		////////////////////////////////////////////	
		UserService.deleteUserById = function(id, callback){
			for(var i=0; i< users.length; i++){
				user = users[i];
				if(user.id == id){
					users.splice(i, 1);
					break;
				}
			}
			callback(JSON.parse(JSON.stringify(users)));
		}

		return UserService;
	}
})();

///////////////////////////////////////////////////////
// A function to create unique user ID
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}