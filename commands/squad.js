exports.run = (client, config, message, args) => {
  if (!message.content.startsWith("!")) return;

  console.log(message.author.voiceChannel);
  if (args[0]) {
    message.channel.send(message.mentions.members.first() + " se le solicita en el canal donde esta <@" + message.author.id +">");
  } else {
    message.channel.send("Necesitamos gente para squad, entre en el canal donde estoy yo <@" + message.author.id + ">. @everyone");
  }
}