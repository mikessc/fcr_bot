exports.run = (params) => {
  var currentVoiceChannelID = params.message.member.voiceChannelID,
      currentInviteUrl;

  try {
    params.message.guild.channels.get(currentVoiceChannelID).createInvite().then(invite => {
      if (params.args[0]) {
        params.message.channel.send({embed: {
            color: params.config.colors.blue,
            description: params.message.mentions.members.first() + " se le solicita en el [canal](" + invite.url + ") donde esta <@" + params.message.author.id +">",
            timestamp: new Date()
          }
        });
      } else {
        params.message.channel.send({embed: {
            color: params.config.colors.blue,
            description: "Necesitamos gente para squad, entre en el [canal](" + invite.url + ") donde estoy yo <@" + params.message.author.id + ">. @everyone",
            timestamp: new Date()
          }
        });
      }
    });
  } catch (err) {
    params.message.channel.send({embed: {
        color: params.config.colors.yellow,
        description: "⚠ Necesitas estar en un canal de voz para solicitar !squad.",
      }
    });
  }
}