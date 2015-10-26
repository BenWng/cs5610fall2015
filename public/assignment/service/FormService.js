(function(){ 
	  angular
		.module("FormBuilderApp")
		.factory("FormService", FormService)
	/////////////////////////////////////////////
	function FormService(){
		var forms = []
		var FormService = {}

		//////////////////////////////////////////////////
		FormService.createFormForUser = function(userId, form, callback){
			var newForm = JSON.parse(JSON.stringify(form));
			newForm.id = guid();
			newForm.userid = userId;
			forms.push(newForm);
			callback(JSON.parse(JSON.stringify(newForm)));
		};
		//////////////////////////////////////////////////
		FormService.findAllFormsForUser = function(userId, callback){
			var forms_x = forms.filter(function (form) {
							return form.userid == userId; 
						})
				callback(JSON.parse(JSON.stringify(forms_x)));
		};
		//////////////////////////////////////////////////
		FormService.deleteFormById = function(formId, callback){
			for(var i=0; i< forms.length; i++){
				form = forms[i];
				if(form.id == formId){
					forms.splice(i, 1);
					break;
				}
			}
			callback(JSON.parse(JSON.stringify(forms)));
		};
		//////////////////////////////////////////////////
		FormService.updateFormById = function(formId, newForm, callback){
			for(var i=0; i< forms.length; i++){
				if(forms[i].id == formId){
					forms[i].name = newForm.name;
					callback(JSON.parse(JSON.stringify(forms[i])));
					return;
				}
			}
			callback(null);
		};	
		return FormService;
	}
})();



//////////////////////////////////////////////////
// function to create unique user ID

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}