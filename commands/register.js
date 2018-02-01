const fs = require("fs");

exports.run = (client, config, message, args) => {
  var fortID = args[0];

  if (!message.content.startsWith(config.prefix)) return;

  client.db = JSON.parse(fs.readFileSync("./db/data.json", "utf8"));

  if (client.db[message.author.id]) {
    message.channel.send("Usuario anteriormente registrado, commando no ejecutado.");
  } else {
    client.db[message.author.id] = fortID;
    fs.writeFile("./db/data.json", JSON.stringify(client.db), (err) => {
      if (err) {
        console.error(err);
      } else {
        message.channel.send("Fortnite ID " + fortID + " registrado para <@" + message.author.id + ">.");
      }
    });
  }
}