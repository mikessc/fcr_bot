exports.run = (params) => {
  var uberIcon = "https://cdn.geekwire.com/wp-content/uploads/2016/02/uberriderlogo-e1454443856991-300x300.png";

  if (!params.message.content.startsWith("!")) return;
  
  if (params.args[0]) {
    params.message.channel.send({embed: {
            color: params.config.colors.purple,
            description: params.message.mentions.members.first() + " se requiere de sus servicios UBER para <@" + params.message.author.id +">",
            thumbnail: {
            	url: uberIcon,
            	height: .5
            }
          }
        });
  } else {
    params.message.channel.send({embed: {
            color: params.config.colors.purple,
            description: "Quien necesita UBER? Aqui esta <@" + params.message.author.id + "> para servirles!",
            thumbnail: {
            	url: uberIcon,
            	height: .5
            }
          }
        });
  }
}