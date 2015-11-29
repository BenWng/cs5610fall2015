var q = require("q");

module.exports = function(app, mongoose, db){

    var FormSchema = require("../schema/form.schema.js")(app, mongoose, db);
    var FormModel = mongoose.model("FormModel", FormSchema);

    var api = {
        create : Create,
        findById : FindById,
        update : Update,
        delete : Delete,
        findFormsByUserId: FindFormsByUserId,
        findFieldsByFormId: FindFieldsByFormId,
        findFieldById: FindFieldById,
        deleteField: DeleteField,
        createField: CreateField,
        updateField: UpdateField
    }

    return api;

    function Create(form){
        var deferred = q.defer();
        FormModel.create(form, function(err, doc){
            FormModel.find({userId: form.userId}, function(err, forms){
                deferred.resolve(forms);
            })
        })

        return deferred.promise;
    };

    function FindFormsByUserId(userId){
        var deferred = q.defer();

        FormModel.find({userId: userId},function(err, forms){
            deferred.resolve(forms);
        })

        return deferred.promise;
    }

    function FindById(id){
        var deferred = q.defer();
        FormModel.findById(id, function(err, form){
            deferred.resolve(form);
        })

        return deferred.promise;
    };

    function Update(id, form){
        var deferred = q.defer();

        FormModel.update({_id:id}, {$set: {
            title: form.title
        }}, function(err, num){
            FormModel.find({userId: form.userId},function(err, forms){
                deferred.resolve(forms);
            })
        })

        return deferred.promise;
    };

    function Delete(id){
        var deferred = q.defer();

        FormModel.findById(id, function(err, form){
            var userId = form.userId;
            form.remove(function(err, num){
                FormModel.find({userId: userId}, function(err, forms){
                    deferred.resolve(forms);
                })
            })
        })
        return deferred.promise;
    };

    function FindFieldsByFormId(formId){
        var deferred = q.defer();
        FormModel.findById(formId, function(err, form){
            deferred.resolve(form.fields);
        })
        return deferred.promise;
    }

    function FindFieldById(formId, fieldId){
        var deferred = q.defer();
        var field = null;

        FormModel.findById(formId, function(err, form) {
            var fields = form.fields;
            for (var i = 0; i < fields.length; i++){
                if (fields[i].id == fieldId) {
                    field = fields[i];
                    break;
                }
            }
            deferred.resolve(field);
        })
        return deferred.promise;
    }

    function DeleteField(formId, fieldId){
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form) {
            var fields = form.fields;
            for(var j=0; j<fields.length; j++){
                if(fields[j].id == fieldId) {
                    fields.splice(j,1);
                    form.save(function(err, doc){
                        deferred.resolve(doc.fields)
                    })
                }
            }
        });
        return deferred.promise;
    }

    function CreateField(formId, field){
        var deferred = q.defer();
        FormModel.findById(formId, function(err, form) {
            form.fields.push(field);
            form.save(function(err, doc){
                deferred.resolve(doc.fields)
            })
        })
        return deferred.promise;
    }

    function UpdateField(formId, fieldId, field){
        var deferred = q.defer();

        FormModel.findById(formId, function(err, form) {
            var fields = form.fields;
            for(var j=0; j<fields.length; j++){
                if(fields[j].id == fieldId) {
                    fields.splice(j,1, field);
                    form.save(function(err, doc){
                        deferred.resolve(doc.fields)
                    })
                }
            }
        });
        return deferred.promise
    }
}