const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.db = JSON.parse(fs.readFileSync("./db/data.json", "utf8"));

client.on("ready", () => {
  console.log("Running Fortnite Costa Rica Bot");
});

client.on("message", (message ) => {

  // Exit and stop if prefix it's not there
  if ((!message.content.startsWith(config.prefix) && !message.content.startsWith("!")) || message.author.bot) return;

  var args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (message.content.startsWith("!")) {
    args = message.content.slice(1).trim().split(/ +/g);
    command = args.shift().toLowerCase();
  }

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, config, message, args);
  } catch (err) {
    message.channel.send("Command error!");
    console.error(err);
  }

});

client.login(config.token);