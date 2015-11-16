var forms = require("./form.mock.json");

module.exports = function(app){
    var api = {
        create : Create,
        findAll : FindAll,
        findById : FindById,
        update : Update,
        delete : Delete,
        findFormByTitle: FindFormByTitle,
        findFormsByUserId: FindFormsByUserId,
        findFieldsByFormId: FindFieldsByFormId,
        findFieldById: FindFieldById,
        deleteField: DeleteField,
        createField: CreateField,
        updateField: UpdateField
    }

    return api;

    function Create(form){
        forms.push(form);
        return FindFormsByUserId(form.userId);
    };

    function FindAll(){
        return forms;
    };

    function FindById(id){
        for(var i=0; i<forms.length; i++){
            if(forms[i].id == id)
                return forms[i];
        }
        return null;
    };

    function Update(id, form){
        for(var i=0; i<forms.length; i++) {
            if (forms[i].id == id) {
                forms.splice(i,1, form);
                console.log(forms);
                return FindFormsByUserId(form.userId);
            }
        }
        return null;
    };

    function Delete(id){
        for(var i=0; i<forms.length; i++) {
            console.log(forms[i]);
            if (forms[i].id == id) {
                var userId = forms[i].userId;
                forms.splice(i, 1);
                return FindFormsByUserId(userId);
            }
        }
    };

    function FindFormByTitle(title){
        for(var i=0; i<forms.length; i++) {
            if (forms[i].title == title)
                return forms[i];
        }
        return null;
    }

    function FindFormsByUserId(userId){
        var result = [];
        for(var i=0; i<forms.length; i++){
            if(forms[i].userId == userId)
                result.push(forms[i]);
        }
        console.log(result);
        return result;
    }

    function FindFieldsByFormId(formId){
        for(var i=0; i<forms.length; i++){
            if(forms[i].id == formId) {
                return forms[i].fields;
            }
        }
        return null;
    }

    function FindFieldById(formId, fieldId){
        for(var i=0; i<forms.length; i++){
            if(forms[i].id == formId){
                var fields = forms[i].fields;
                for(var j=0; j<fields.length; j++){
                    if(fields[j].id == fieldId)
                        return fields[j];
                }
            }
        }
        return null;
    }

    function DeleteField(formId, fieldId){
        for(var i=0; i<forms.length; i++){
            if(forms[i].id == formId){
                var fields = forms[i].fields;
                for(var j=0; j<fields.length; j++){
                    if(fields[j].id == fieldId) {
                        fields.splice(j,1);
                        break;
                    }
                }
                return fields;
            }
        }
        return null;
    }

    function CreateField(formId, field){
        for(var i=0; i<forms.length; i++){
            if(forms[i].id == formId){
                var fields = forms[i].fields;
                fields.push(field);
                return fields;
            }
        }
        return null;
    }

    function UpdateField(formId, fieldId, field){
        for(var i=0; i<forms.length; i++){
            if(forms[i].id == formId){
                var fields = forms[i].fields;
                for(var j=0; j<fields.length; j++){
                    if(fields[j].id == fieldId) {
                        fields.splice(j,1, field);
                        break;
                    }
                }
                return fields;
            }
            return null;
        }
    }
}
