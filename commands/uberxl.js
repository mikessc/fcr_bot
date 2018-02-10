exports.run = (params) => {  
  if (params.args[0]) {
    params.message.channel.send(params.message.mentions.members.first() + " necesitamos un 4x4 para <@" + params.message.author.id +">");
  } else {
    params.message.channel.send("Quien necesita UberXL? Aqui esta el 4x4! <@" + params.message.author.id + ">! para carrear a los pesaditos...");
  }
}