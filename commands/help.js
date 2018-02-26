exports.run = (params) => {
  var commands = {}; // initiate value for the command list of client
  
  params.message.author.send({
    embed: {
      color: params.config.colors.blue,
      title: "AYUDA",
      description: "Esta es la guía de comandos que puedes utilizar con el bot de Fortnite CR.\nPara información más detallada visita este [enlace](https://github.com/mikessc/fcr_bot/blob/master/README.md)",
      fields: [{
          name: "+register FORTNITE_ID",
          value: "• Liga tu usuario de Discord con tu ID de Fortnite. Remplazar 'FORTNITE_ID' por tu usuario de Fortnite, no olvides asegurarte de que este bien escrito para que los demas jugadores puedan agregarte sin problemas"
        },
        {
          name: "+get @DISCORD_ID",
          value: "• Te muestra el ID de Fortnite de algun usuario del grupo. Remplazar 'DISCORD_ID' por algun ID de usuario de Discord."
        },
        {
          name: "+reset FORTNITE_ID",
          value: "• resetea tu ID de Fortnite. Remplazar 'FORTNITE_ID' por tu nuevo usuario de Fortnite."
        },
        {
          name: "+squad",
          value: "• Mensaje general para pedir alguien en tu squad."
        },
        {
          name: "+squad @DISCORD_ID",
          value: "• Mensaje para pedir a alguien especifico en tu squad. Remplazar 'DISCORD_ID' por algun ID de usuario de Discord."
        },
        {
          name: "+uber",
          value: "• Ofrecer carreo."
        },
        {
          name: "+uber @DISCORD_ID",
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