var users = require("./user.mock.json");

module.exports = function(app) {
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
        users.push(user);
        return users;
    };

    function FindAll() {
        return users;
    };

    function FindById(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id)
                return users[i];
        }
        return null;
    };

    function Update(id, user) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id){
                users.splice(i,1,user);
                break;
            }
        }
        return users;
    };

    function Delete(id) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users.splice(i,1);
                break;
            }
        }
        return users;
    };

    function FindByUsername(username){
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == username)
                return users[i];
        }
        return null;
    }

    function FindByCredentials(credentials){
        for (var i = 0; i < users.length; i++) {
            if (users[i].username == credentials.username && users[i].password == credentials.password)
                return users[i];
        }
        return null;
    }
}
