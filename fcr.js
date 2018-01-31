const Discord = require("discord.js");
const fcr = new Discord.Client();

fcr.on("ready", () => {
  console.log("I am ready!");
});

fcr.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.content.startsWith(".fcr")) {
        message.channel.send("bot command!");
    }
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

fcr.login("NDA4MjkwNDM3NzUzOTk1Mjc1.DVN8uQ.-ZimvU5rDnuVewf3RsOV149VZM8");