(function(){
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService)



    function FieldService($http, $q){
        var fieldService = {
            createFieldForForm: CreateFieldForForm,
            getFieldsForForm: GetFieldsForForm,
            getFieldForForm: GetFieldForForm,
            deleteFieldFromForm: DeleteFieldFromForm,
            updateField: UpdateField
        }

        return fieldService;


        function GetFieldsForForm(formId){
            var deferred = $q.defer();
            $http.get("/api/assignment/form/"+ formId +"/field")
                .success(function(res){
                    deferred.resolve(res);
                });
            return deferred.promise;
        };


        function CreateFieldForForm(formId, field){
            var deferred = $q.defer();
            $http.post("/api/assignment/form/"+ formId +"/field", field)
                .success(function(res){
                    deferred.resolve(res);
                });
            return deferred.promise;
        };




        function GetFieldForForm(formId, fieldId){
            var deferred = $q.defer();
            $http.get("/api/assignment/form/"+ formId +"/field/" + fieldId)
                .success(function(res){
                    deferred.resolve(res);
                });
            return deferred.promise;
        };

        function DeleteFieldFromForm(formId, fieldId){
            var deferred = $q.defer();
            $http.delete("/api/assignment/form/"+ formId + "/field/" + fieldId)
                .success(function(res){
                    deferred.resolve(res);
                });
            return deferred.promise;
        };

        function UpdateField(formId, fieldId, field){
            var deferred = $q.defer();
            $http.put("/api/assignment/form/"+ formId +"/field/" + fieldId, field)
                .success(function(res){
                    deferred.resolve(res);
                });
            return deferred.promise;
        }
    }
})();