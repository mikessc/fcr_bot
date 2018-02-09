var axios = require('axios');

exports.run = (params) => {
  var fortID = params.args.join(" ");

  if (!params.message.content.startsWith("!")) return;

  axios.get('https://fortnite.y3n.co/v2/player/' + fortID, {
    headers: { 'X-Key' : 'T2CPwtTcYdkowM8Nyxb4' }
  })
  .then(function (response) {
    var data = response.data.br;
    params.message.channel.send({
      embed: {
        color: params.config.colors.blue,
        thumbnail : {
          url : "https://cdn1.unrealengine.com/EpicGamesWebsite/3831455/com/epicgames/plugins/clientDownload/logo-epic-cb4399a7ee205610531057537937045e.png",
          height : 1
        },
        title: fortID,
        description: "Level: "+ data.profile.level + " | " 
                      + (data.stats.pc.all.minutesPlayed/60).toFixed(2) + " hours | " 
                      + data.stats.pc.all.matchesPlayed + " matches | "
                      + data.stats.pc.all.kills + " kills\nTotal Wins "
                      + data.stats.pc.all.wins + " | Total K/D " 
                      + data.stats.pc.all.kpd + " | Score "
                      + data.stats.pc.all.score + "\n\n",
        fields: [
          {
            name : "Solo",
            value : "K/D **" + data.stats.pc.solo.kpd 
                    + "**\nWins **" + data.stats.pc.solo.wins 
                    + "**\nKills **"  + data.stats.pc.solo.kpd 
                    + "**\nWin % **" + data.stats.pc.solo.winRate.toFixed(2) + "**",
            inline : true
          },
          {
            name : "Duo",
            value : "K/D **" + data.stats.pc.duo.kpd 
                    + "**\nWins **" + data.stats.pc.duo.wins 
                    + "**\nKills **"  + data.stats.pc.duo.kpd 
                    + "**\nWin % **" + data.stats.pc.duo.winRate.toFixed(2) + "**",
            inline : true
          },
          {
            name : "Squad",
            value : "K/D **" + data.stats.pc.squad.kpd 
                    + "**\nWins **" + data.stats.pc.squad.wins 
                    + "**\nKills **"  + data.stats.pc.squad.kpd 
                    + "**\nWin % **" + data.stats.pc.squad.winRate.toFixed(2) + "**",
            inline : true
          }
        ]
      }
    });
  })
  .catch(function (error) {
    console.log(error);
  });
}