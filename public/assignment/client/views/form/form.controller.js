
(function(){ 
	  angular
		.module("FormBuilderApp")
		.controller("FormController", FormController);		
})();

function FormController($scope, $rootScope, $location, FormService){
	var user = $rootScope.user;
	
	if(user == null)
		alert("please login first");
	else{
		RenderForm(user.id);
		$scope.addForm = AddForm;
		$scope.deleteForm = DeleteForm;
		$scope.selectForm = SelectForm;
		$scope.updateForm = UpdateForm;			
	}
	
	function RenderForm(userId){
		FormService.findAllFormsForUser(userId)
			.then(function(forms){
				$scope.forms = forms;
			})
	}
	
	function AddForm(){
		var form = $scope.form_first;
		FormService.createFormForUser(user.id, form)
			.then(function(forms){
				$scope.forms = forms;
			});
	}
	
	function UpdateForm(){
		var form = $scope.form_first;
		if(form.id == null)
			alert("This form has not been created yet, please create it first");
		else{
			console.log(form.id);
			FormService.updateFormById(form.id, form)
				.then(function(forms){
					$scope.forms = forms;
				})
		}
	}
	
	function DeleteForm(index){
		var form = $scope.forms[index];
		FormService.deleteFormById(form.id).then(function(forms){
			$scope.forms = forms;
		});
	}
	
	function SelectForm(index){
		$scope.form_first = JSON.parse(JSON.stringify($scope.forms[index]));
		$rootScope.form = $scope.form_first;
	}
}
