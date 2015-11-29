

module.exports = function(app, mongoose, db){

    var FieldSchema = require("./field.schema.js")(app, mongoose, db);

    var FormSchema = mongoose.Schema({
        title: String,
        userId: String,
        fields:[FieldSchema]
    }, {collection: "cs5610.assignment.form"});

    return FormSchema;
}