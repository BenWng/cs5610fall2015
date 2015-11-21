


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
          var deferred=$q.defer();
          $http.post("/api/project/user",newUser)
            .success(function(user){
              console.log(user);
              deferred.resolve(user);
          });
          return deferred.promise;
        }

        function findUsersAll(){
          var deferred=$q.defer();
          $http.get("api/project/user")
            .success(function(users){
              deferred.resolve(users);
          });
          return deferred.promise;
        }


        function findUserById(id){
          var deferred = $q.defer();

          //to-do: not very sure about this url

          $http.get("api/project/user/"+id)
            .success(function(user){
              deferred.resolve(user);
          });
          return deferred.promise;
        }

        function findUserByAccount(account){
          var deferred=$q.defer();
          $http.get("api/project/user/account/"+account)
            .success(function(user){
            deferred.resolve(user);
          });
          return deferred.promise;
        }


        function findUserByCredentials(username,activation){
          var deferred=$q.defer();
          //Totally unsure about this
          $http.get("api/project/user/credential?username="+username+"&activation="+activation)
            .success(function(user){
              deferred.resolve(user);
          });
          return deferred.promise;
        }


        function updateUserById(account){
          var deferred=$q.defer();
          $http.put("api/project/user/"+id)
            .success(function(user){
            deferred.resolve(user);
          });
          return deferred.promise;
        }


        function deleteUserById(id){
          var deferred=$q.defer();
          $http.delete("/api/assignment/user/"+id)
            .success(function(user){
              deferred.resolve(user);
            });
          return deferred.promise;
        }


    }
})();
