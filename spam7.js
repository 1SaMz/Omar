const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === '&') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 1000; x++) {
            message.channel.send(`أحبك بارود`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    

	
	
client.login("NDgwMTIyMjE2MTU2MjMzNzM5.DqtcvQ.sjA2EWAbamkxhelcuJQB35f-Ugo")
