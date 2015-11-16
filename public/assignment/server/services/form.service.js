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
        form.id = uuid.v4();
        res.json(model.create(form));
    }

    function FindFormsByUserId(req, res){
        var userId = req.params.userId;
        res.json(model.findFormsByUserId(userId));
    }

    function FindFormById(req, res){
        var id = req.params.formId;
        res.json(model.findById(id));
    }


    function UpdateFormById(req, res){
        var id = req.params.formId;
        console.log(id);
        var form = req.body;
        res.json(model.update(id, form));
    }

    function DeleteFormById(req, res){
        var id = req.params.formId;
        res.json(model.delete(id));
    }
}
