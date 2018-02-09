exports.run = (params) => {
  var fortID = params.args.join(" ");

  if (!params.message.content.startsWith(params.config.prefix)) return;

  params.MongoClient.connect(params.access.dbURL, function(err, db) {
    if (err) {
      throw err;
      params.client.onDataBaseError(params.message.channel);
    } else {
      var dbo = db.db("fcr"),
          myobj = { $set : { discordID: params.message.author.id, fortniteID: fortID } },
          search = { discordID: params.message.author.id },
          par = params;

      //busca el usuario para ver si esta registrado
      dbo.collection("users").find(search).toArray(function(err, result) {
        if (err) {
          params.client.onDataBaseError(params.message.channel);
        } else {
          if (result.length != 1) { //usuario no ha sido registrado
            params.message.channel.send({
              embed: {
                color: params.config.colors.red,
                description: "⛔ El usuario no ha registrado un ID de Fortnite, use **.fcr register <FORTNITE_ID>**."
              }
            });
          } else { //si encuentra el usuario
            dbo.collection("users").updateOne(search, myobj, function(err, res) {
              if (err) {
                params.client.onDataBaseError(params.message.channel);
              } else {
                params.message.channel.send({
                  embed: {
                    color: params.config.colors.blue,
                    description: "☑ Fortnite ID **" + fortID + "** reseteado para <@" + params.message.author.id + ">."
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