const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === '6') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 1000; x++) {
            message.channel.send(`6`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    

	
	
client.login("NDgwMTIxNjA0OTUzNzM1MTcw.Dqtb3A.epekMYxQ0RUjpjjODCDitZ2g2Fg")
