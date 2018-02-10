const Discord = require("discord.js");
const access = require("./access.json");
const config = require("./config.json");
const fs = require("fs");

const MongoClient = require('mongodb').MongoClient;
const client = new Discord.Client();

// Vars
client.commandsList = fs.readdirSync('./commands/');

// Events
client.on("ready", () => {  
  console.log("Running Fortnite Costa Rica Bot");
  client.user.setActivity('+help');
});

client.on("message", (message ) => {

  // Exit and stop if prefix it's not there
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (message.content.startsWith("+")) {
    args = message.content.slice(1).trim().split(/ +/g);
    command = args.shift().toLowerCase();
  }

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run({client, config, access, message, args, MongoClient});
  } catch (err) {
    message.channel.send({
      embed: {
        color: config.colors.red,
        description: "⛔ Error en el comando. Escribe **.fcr help** para obtener ayuda."
      }
    });
    console.error(err);
  }

});

client.login(access.token);

// Functions
client.onDataBaseError = function (channel) {
  var dbErrorMsg = {
    embed: {
      color: params.config.colors.red,
      description: "⛔ Error en conexión a base de datos."
    }
  };
  channel.send(dbErrorMsg);
};