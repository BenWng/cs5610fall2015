//form controller

(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("FormController", FormController);		
})();



/////////////////////////////////////////////////////////////////////

function FormController($scope, $rootScope, $location, FormService){
	var user = $rootScope.user;
	
	if(user == null)
		alert("please login first");
	else{
		AddForm_helper(user.id);
		$scope.addForm = addForm;
		$scope.deleteForm = deleteForm;
		$scope.selectForm = selectForm;
		$scope.updateForm = updateForm;			
	}
	
	function AddForm_helper(userId){
		FormService.findAllFormsForUser(userId, function(forms){
			$scope.forms = forms;
		})
	}
	function addForm(){
		var form = $scope.form_first;
		FormService.createFormForUser(user.id, form, function(form){
			AddForm_helper(user.id);
		})
	}
	function updateForm(){
		var form = $scope.form_first;
		if(form.id == null)
			alert("This form does not exist");
		else{
			FormService.updateFormById(form.id, form, function(form){
				AddForm_helper(user.id);
			})
		}
	}
	function deleteForm(index){
		var form = $scope.forms[index];
		FormService.deleteFormById(form.id, function(forms){
			$scope.forms = forms;
		})
	}	
	function selectForm(index){
		$scope.form_first = JSON.parse(JSON.stringify($scope.forms[index]));
	}
}
