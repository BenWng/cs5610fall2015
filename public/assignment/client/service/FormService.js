(function(){ 
	  angular
		.module("FormBuilderApp")
		.factory("FormService", FormService)
		
	function FormService($http, $q){
		var formService = {
			createFormForUser: CreateFormForUser,
			findAllFormsForUser: FindAllFormsForUser,
			deleteFormById: DeleteFormById,
			updateFormById: UpdateFormById
		}

		return formService;

		function CreateFormForUser (userId, form){
			var deferred = $q.defer();

			$http.post("/api/assignment/user/"+ userId + "/form",form)
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise;
		};
		
		function FindAllFormsForUser(userId){
			var deferred = $q.defer();
			$http.get("/api/assignment/user/"+ userId + "/form")
				.success(function(res){
					deferred.resolve(res);
				});
			return deferred.promise;
		};
		
		 function DeleteFormById(formId){
			 var deferred = $q.defer();
			 $http.delete("/api/assignment/form/"+formId)
				 .success(function(res){
					 deferred.resolve(res);
				 });
			 return deferred.promise;
		};
		
		 function UpdateFormById(formId, form){
			 var deferred = $q.defer();
			 $http.put("/api/assignment/form/"+formId, form)
				 .success(function(res){
					 deferred.resolve(res);
				 });
			 return deferred.promise;
		};
	}
})();