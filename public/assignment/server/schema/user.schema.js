
module.exports = function(app, mongoose, db) {

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String
    }, {collection: "cs5610.assignment.user"});

    return UserSchema;
}
