const fs = require("fs");

exports.run = (client, config, message, args) => {
  var fortID = args[0];

  if (!message.content.startsWith(config.prefix)) return;

  client.db = JSON.parse(fs.readFileSync("./db/data.json", "utf8"));

  if (client.db[message.mentions.members.first().id]) {
    message.channel.send("El Fortnite ID de <@" + message.mentions.members.first().id + "> es: " + client.db[message.mentions.members.first().id]);
  } else {
    message.channel.send("No se ha registrado ID para el usuario <@" + message.mentions.members.first().id + ">");
  }
}