
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
		RenderForm(user._id);
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
		form.userId = user._id;
		FormService.createFormForUser(user._id, form)
			.then(function(forms){
				$scope.forms = forms;
			});
	}
	
	function UpdateForm(){
		var form = $scope.form_first;
		if(form._id == null)
			alert("This form has not been created yet");
		else{
			FormService.updateFormById(form._id, form)
				.then(function(forms){
					$scope.forms = forms;
				})
		}
	}
	
	function DeleteForm(index){
		var form = $scope.forms[index];
		FormService.deleteFormById(form._id).then(function(forms){
			$scope.forms = forms;
		});
	}
	
	function SelectForm(index){
		$scope.form_first = JSON.parse(JSON.stringify($scope.forms[index]));
		$rootScope.form = $scope.form_first;
	}
}
