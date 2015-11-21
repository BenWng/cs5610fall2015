module.exports = function(app, model){

  app.post("/api/project/user",createUser);
  app.get("api/project/user",findUsersAll);
  app.get("api/project/user/:id",findUserById);
  app.get("api/project/user/account/:account",findUserByAccount);
  app.get("api/project/user/credentials/:username/:activation",findUserByCredentials);
  app.put("api/project/user/:id",updateUserById);
  app.delete("api/project/user/:id",deleteUserById);




  function createUser(req,res){
    var newUser = req.body;
    res.json(model.createUser(newUser));
  }

  function findUsersAll(req,res){
    res.json(model.findUsersAll());
  }

  function findUserById(req,res){
    var id = req.params.id;
    res.json(model.findUserById(id));
  }

  function findUserByAccount(req,res){
    var account=req.body;
    res.json(model.findUserByAccount(account));
  }


  function findUserByCredentials(req,res){
    var username=req.params("username");
    var activation=req.params("activation")
    if (username!==undefined &&
        activation!==undefined){
          var credentials={username:username,
            activation:activation};
          res.json(model.findUserByCredentials(credentials));
    }
    else{
      alert("check your input, please");
      //?? To-do: what should I return here?
    }
    //??
  }


  function updateUserById(req,res){
    var id=req.params.id;
    res.json(model.updateUserById(id));
  }


  function deleteUserById(req,res){
    var id=req.params.id;
    res.json(model.deleteUserById(id));
  }

}
