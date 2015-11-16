var uuid = require('node-uuid');

module.exports = function(app, model, db){

    app.post("/api/assignment/user", CreateUser);
    app.get("/api/assignment/user", FindUsers);
    app.get("/api/assignment/user/:id", FindUserById);
    app.put("/api/assignment/user/:id", UpdateUserById);
    app.delete("/api/assignment/user/:id", DeleteUserById);

    function CreateUser(req, res){
        var user = req.body;
        console.log(user);
        user.id = uuid.v4();
        res.json(model.create(user));
    }

    function FindUsers(req, res){
        var username = req.query.username;
        var password = req.query.password;

        if(username == null && password == null)
            res.json(model.findAll());

        else if(password == null)
            res.json(model.findByUsername(username));

        else{
            var credentials = {
                username: req.query.username,
                password: req.query.password
            }
            res.json(model.findByCredentials(credentials));
        }

    }

    function FindUserById(req, res){
        var id = req.params.id;
        res.json(model.findById(id));
    }

    function UpdateUserById(req, res){
        var id = req.params.id;
        var user = req.body;
        res.json(model.update(id, user));
    }

    function DeleteUserById(req, res){
        var id = req.params.id;
        res.json(model.delete(id));

    }
}
