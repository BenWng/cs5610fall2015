


(function(){
  angular
    .module("BlogApp")
    .factory("UserService",UserService);

    function UserService($rootScope,$q,$http){

        var service = {
          createUser : createUser,
          findUsersAll: findUsersAll,
          findUserById: findUserById,
          findUserByAccount: findUserByAccount,
          findUserByCredentials: findUserByCredentials,
          updateUserById: updateUserById,
          deleteUserById: deleteUserById
        };
        return service;

        function createUser(newUser){
       
          return $http.post("/api/project/user",newUser);
        }

        function findUsersAll(){
    
          return $http.get("api/project/user");
        }


        function findUserById(id){
       
          //to-do: not very sure about this url

          return $http.get("api/project/user/"+id);
        }

        function findUserByAccount(account){

          return $http.get("api/project/user/account/"+account);
        }


        function findUserByCredentials(username,activation){
          //Totally unsure about this
          return $http.get("api/project/user/credential?username="+username+"&activation="+activation);
        }


        function updateUserById(account){

          return $http.put("api/project/user/"+id);
        }


        function deleteUserById(id){

          return $http.delete("/api/assignment/user/"+id);
        }


    }
})();
