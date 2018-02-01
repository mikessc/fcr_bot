exports.run = (client, config, message, args) => {
  if (!message.content.startsWith("!")) return;
  
  if (args[0]) {
    message.channel.send(message.mentions.members.first() + " se requiere de sus servicios UBER para <@" + message.author.id +">");
  } else {
    message.channel.send("Quien necesita UBER? Aqui esta <@" + message.author.id + "> para servirles!");
  }
}