
var uuid = require('node-uuid');

module.exports = function(app, model, db) {
    app.get("/api/assignment/form/:formId/field", FindFieldsByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", FindFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", DeleteFieldById);
    app.post("/api/assignment/form/:formId/field", CreateFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", UpdateFieldById);

    function FindFieldsByFormId(req, res){
        var formId = req.params.formId;
        model.findFieldsByFormId(formId).then(function(fields){
            res.json(fields);
        });
    }
    function FindFieldById(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        model.findFieldById(formId, fieldId).then(function(field){
            res.json(field)
        });
    }

    function  DeleteFieldById(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        model.deleteField(formId, fieldId).then(function(fields){
            res.json(fields);
        });
    }

    function CreateFieldByFormId(req, res){
        var formId = req.params.formId;
        var field = req.body;
        field.id = uuid.v4();
        model.createField(formId, field).then(function(fields){
            res.json(fields);
        });
    }

    function UpdateFieldById(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        model.updateField(formId, fieldId, field).then(function(fields){
            res.json(fields);
        });
    }
}