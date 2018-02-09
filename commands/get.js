exports.run = (params) => {

  if (!params.message.content.startsWith(params.config.prefix)) return;

  params.MongoClient.connect(params.access.dbURL, function(err, db) {
    if (err) {
      throw err;
      params.client.onDataBaseError(params.message.channel);
    } else {
      var dbo = db.db("fcr"),
          search = { discordID: params.message.mentions.members.first().id };

      //busca el usuario para ver si esta registrado
      dbo.collection("users").find(search).toArray(function(err, result) {
        if (err) {
          params.client.onDataBaseError(params.message.channel);
        } else {
          if (result.length == 1) { //si encuentra el usuario
            params.message.channel.send({
              embed: {
                color: params.config.colors.blue,
                description: "El Fortnite ID de <@" + search.discordID + "> es: **" + result[0].fortniteID + "**"
              }
            });
          } else { //usuario no ha sido encontrado
            params.message.channel.send({
              embed: {
                color: params.config.colors.red,
                description: "⛔ No se ha registrado ID para el usuario <@" + search.discordID + ">"
              }
            });
          }
        }
        db.close();
      });
    }
  });
}