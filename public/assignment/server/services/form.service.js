
var uuid = require('node-uuid');

module.exports = function(app, model, db){

    app.get("/api/assignment/user/:userId/form", FindFormsByUserId);
    app.get("/api/assignment/form/:formId", FindFormById);
    app.delete("/api/assignment/form/:formId", DeleteFormById);
    app.post("/api/assignment/user/:userId/form",CreateFormByUserId);
    app.put("/api/assignment/form/:formId", UpdateFormById);

    function CreateFormByUserId(req, res){
        var userId = req.params.userId;
        var form = req.body;
        form.userId = userId;

        model.create(form).then(function(forms){
            res.json(forms);
        })
    }

    function FindFormsByUserId(req, res){
        var userId = req.params.userId;
        model.findFormsByUserId(userId).then(function (forms){
            res.json(forms)
        });
    }

    function FindFormById(req, res){
        var id = req.params.formId;
        model.findById(id).then(function (form){
            res.json(form);
        })
    }


    function UpdateFormById(req, res){
        var id = req.params.formId;
        var form = req.body;

        model.update(id, form).then(function(forms){
            res.json(forms);
        })
    }

    function DeleteFormById(req, res){
        var id = req.params.formId;
        model.delete(id).then(function(forms){
            res.json(forms);
        })
    }
}

