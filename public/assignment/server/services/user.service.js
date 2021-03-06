
var uuid = require('node-uuid');

module.exports = function(app, model, db){

    app.post("/api/assignment/user", CreateUser);
    app.get("/api/assignment/user", FindUsers);
    app.get("/api/assignment/user/:id", FindUserById);
    app.put("/api/assignment/user/:id", UpdateUserById);
    app.delete("/api/assignment/user/:id", DeleteUserById);

    function CreateUser(req, res){
        var user = req.body;
        model.create(user).then(function(users){
            res.json(users);
        })
    }

    function FindUsers(req, res){
        var username = req.query.username;
        var password = req.query.password;

        if(username == null && password == null) {
            model.findAll().then(function(users){
                res.json(users)
            })
        }

        else if(password == null) {
            model.findByUsername(username).then(function(user){
                res.json(user);
            })
        }

        else{
            var credentials = {
                username: req.query.username,
                password: req.query.password
            }
            model.findByCredentials(credentials).then(function(user){
                res.json(user);
            })
        }
    }

    function FindUserById(req, res){
        var id = req.params.id;
        model.findById(id).then(function(user){
            res.json(user);
        })
    }

    function UpdateUserById(req, res){
        var id = req.params.id;
        var user = req.body;
        model.update(id, user).then(function(users){
            res.json(users);
        })
    }

    function DeleteUserById(req, res){
        var id = req.params.id;
        model.delete(id).then(function(users){
            res.json(users);
        })
    }
}
