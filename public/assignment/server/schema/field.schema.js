


module.exports = function(app, mongoose, db){
    var FieldSchema = mongoose.Schema({
        "id": {
            type: String
        },
        "label": String,
        "type": String,
        "tooltip": String,
        "placeholder": String,
        "options":[
            {
                "label": String,
                "value": String
            }
        ]
    })

    return FieldSchema;
}