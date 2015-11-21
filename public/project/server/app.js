module.exports = function(app){

    var usersModel = require("./models/users.model.js")(app);
    var postsModel = require("./models/posts.model.js")(app);
    require("./services/users.service.js")(app,usersModel);
    require("./services/posts.service.js")(app,postsModel);
};
