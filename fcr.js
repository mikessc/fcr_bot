var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord fcr
var fcr = new Discord.Client({
   token: auth.token,
   autorun: true
});
fcr.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(fcr.username + ' - (' + fcr.id + ')');
});
fcr.on('message', function (user, userID, channelID, message, evt) {
    // Our fcr needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                fcr.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});