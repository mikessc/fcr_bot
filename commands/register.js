exports.run = (params) => {
  var fortID = params.args.join(" ");

  params.MongoClient.connect(params.access.dbURL, function(err, db) {
    if (err) {
      throw err;
      params.client.onDataBaseError(params.message.channel);
    } else {
      var dbo = db.db("fcr"),
          myobj = { discordID: params.message.author.id, fortniteID: fortID },
          search = { discordID: params.message.author.id };

      //busca el usuario para ver si esta registrado
      dbo.collection("users").find(search).toArray(function(err, result) {
        if (err) {
          params.client.onDataBaseError(params.message.channel);
        } else {
          if (result.length == 1) { //si encuentra el usuario
            params.message.channel.send({
              embed: {
                color: params.config.colors.red,
                description: "⛔ Usuario anteriormente registrado, comando no ejecutado."
              }
            });
          } else { //usuario no ha sido registrado
            dbo.collection("users").insertOne(myobj, function(err, res) {
              if (err) {
                params.client.onDataBaseError(params.message.channel);
              } else {
                params.message.channel.send({
                  embed: {
                    color: params.config.colors.blue,
                    description: "☑ Fortnite ID **" + fortID + "** registrado para <@" + params.message.author.id + ">."
                  }
                });
              }
            });
          }
        }
        db.close();
      });
    }
  });
}