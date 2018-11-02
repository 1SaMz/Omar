const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', message => {
    if (message.content === '1') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 1000; x++) {
            message.channel.send(`1`)
              .then(m => {
                count++;
              })
              
            }
          }
    });
    
    

	
	
client.login("NDc4MTM5MTE4OTU0NjEwNjk4.Dqq1Aw.e5lRGppblTNUOiAGPOP8SHteQKY")
