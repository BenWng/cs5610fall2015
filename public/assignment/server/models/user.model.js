
var q = require("q");

module.exports = function(app, mongoose, db) {

    var UserSchema = require("../schema/user.schema.js")(app, mongoose, db);
    var UserModel = mongoose.model("UserModel", UserSchema);

    var api = {
        create: Create,
        findAll: FindAll,
        findById: FindById,
        update: Update,
        delete: Delete,
        findByUsername: FindByUsername,
        findByCredentials :FindByCredentials
    }
    return api;

    function Create(user) {
        var deferred = q.defer();
        UserModel.create(user, function(err, doc){
            UserModel.find(function(err, users){
                deferred.resolve(users);
            })
        })

        return deferred.promise;
    };

    function FindAll() {
        var deferred = q.defer();
        UserModel.find(function(err, users){
            deferred.resolve(users);
        })
        return deferred.promise;
    };

    function FindById(id) {
        var deferred = q.defer();
        UserModel.findById(id, function(err, user){
            deferred.resolve(user)
        })
        return deferred.promise;
    };

    function Update(id, user) {

        var deferred = q.defer();

        UserModel.update({_id:id}, {$set: {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            email: user.email
        }}, function(err, user){
            UserModel.find(function(err, users){
                deferred.resolve(users);
            })
        })

        return deferred.promise;
    };

    function Delete(id) {
        var deferred = q.defer();
        UserModel.findById(id).remove(function(err, removed){
            UserModel.find(function(err, users){
                deferred.resolve(users);
            })
        })
        return deferred.promise;
    };

    function FindByUsername(username){
        var deferred = q.defer();
        UserModel.findOne({username: username}, function(err, user){
            deferred.resolve(user)
        })
        return deferred.promise;
    }

    function FindByCredentials(credentials){
        var deferred = q.defer();
        var username = credentials.username;
        var password = credentials.password;
        UserModel.findOne({username: username, password: password}, function(err, user){
            deferred.resolve(user)
        })
        return deferred.promise;
    }
}