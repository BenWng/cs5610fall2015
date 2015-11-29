var uuid = require('node-uuid');

module.exports = function(app, model, db) {
    app.get("/api/assignment/form/:formId/field", FindFieldsByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", FindFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", DeleteFieldById);
    app.post("/api/assignment/form/:formId/field", CreateFieldByFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", UpdateFieldById);

    function FindFieldsByFormId(req, res){
        var formId = req.params.formId;
        res.json(model.findFieldsByFormId(formId));
    }
    function FindFieldById(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(model.findFieldById(formId, fieldId));
    }

    function  DeleteFieldById(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        res.json(model.deleteField(formId, fieldId));
    }

    function CreateFieldByFormId(req, res){
        var formId = req.params.formId;
        var field = req.body;
        field.id = uuid.v4();
        res.json(model.createField(formId, field));
    }

    function UpdateFieldById(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        res.json(model.updateField(formId, fieldId, field));
    }
}
