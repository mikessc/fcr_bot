exports.run = (params) => {
  var commands = {}; // initiate value for the command list of client
  
  for (i = 0; i < params.client.commandsList.length; i++) {
    let item = params.client.commandsList[i];
    if (item.match(/\.js$/)) { // only take js files
      delete require.cache[require.resolve(`./commands/${item}.js`)]; // delete the cache of the require, useful in case you wanna reload the command again
      commands[item.slice(0, -3)] = require(`./commands/${item}.js`); // and put the require inside the params.client.commands object
    }
  }
  consle.dir(commands);

  params.message.author.send({
    embed: {
      color: params.config.colors.blue,
      title: "AYUDA",
      description: "Esta es la guía de comandos que puedes utilizar con el bot de Fortnite CR.",
      fields: [{
          name: ".fcr register FORTNITE_ID",
          value: "• Liga tu usuario de Discord con tu ID de Fortnite. Remplazar 'FORTNITE_ID' por tu usuario de Fortnite, no olvides asegurarte de que este bien escrito para que los demas jugadores puedan agregarte sin problemas"
        },
        {
          name: ".fcr get @DISCORD_ID",
          value: "• Te muestra el ID de Fortnite de algun usuario del grupo. Remplazar 'DISCORD_ID' por algun ID de usuario de Discord."
        },
        {
          name: "!squad",
          value: "• Mensaje general para pedir alguien en tu squad."
        },
        {
          name: "!squad @DISCORD_ID",
          value: "• Mensaje para pedir a alguien especifico en tu squad. Remplazar 'DISCORD_ID' por algun ID de usuario de Discord."
        },
        {
          name: "!uber",
          value: "• Ofrecer carreo."
        },
        {
          name: "!uber @DISCORD_ID",
          value: "• Pedirle carreo a alguien. Remplazar 'DISCORD_ID' por algun ID de usuario de Discord."
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: params.client.user.avatarURL,
        text: "© Creado por ☢ A.I.R.E.L"
      }
    }
  });
}