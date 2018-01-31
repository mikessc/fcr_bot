const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDA4MjkwNDM3NzUzOTk1Mjc1.DVN8uQ.-ZimvU5rDnuVewf3RsOV149VZM8");