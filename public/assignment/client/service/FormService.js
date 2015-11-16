(function(){
	  angular
		.module("FormBuilderApp")
		.factory("FormService", FormService)

	/////////////////////////////////////////////
	function FormService($http,$q){
		var FormService = {
			createFormForUser: createFormForUser,
			findAllFormsForUser: findAllFormsForUser,
			deleteFormById: deleteFormById,
			updateFormById: updateFormById
		}

		return FormService;

		//////////////////////////////////////////////////
		function createFormForUser (userId, form){
			var deferred=$q.defer();
			$http.get("/api/assignment/user/"+userId+"/form",form)
				.success(function(newForm){
					deferred.resolve(newForm);
				});
				return deferred.promise;
		};
		//////////////////////////////////////////////////
		function findAllFormsForUser (userId){
			var deferred=$q.defer();
			$http.get("/api/assignment/user"+userId+"/form")
				.success(function(formByUser){
						deferred.resolve(formByUser);
				});

				return deferred.promise;
		};
		//////////////////////////////////////////////////
		function deleteFormById(formId){
			var deferred=$q.defer();
			$http.delete("/api/assignment/form/"+formId)
				.success(function(form){
					deferred.resolve(form);
				});
				return deferred.promise;
		};
		//////////////////////////////////////////////////
		function updateFormById (formId, newForm){
			var deferred=$q.defer();
			$http.put("/api/assignment/form"+formId,newForm)
				.success(function(updatedForm){
					deferred.resolve(updatedForm);
				});
			return deferred.promise;
			};
		}
})();
