const Discord = require('discord.js'); 

const Ytdl = require('ytdl-core');
const bot = new Discord.Client();

const token = 'NzE2ODQ0NTMzNTg4OTUxMDYx.XtRr8w.GcPf72L4cLnjPNCIrDZgudh58JA'
bot.login(token);

let estouPronto = false;

bot.on('ready', () => {
      console.log('Estou conectado!');
});

let connection;

bot.on('message', async (msg) => {

      
      if (msg.content === 'Hatsune Miku join'){
            if (msg.member.voice.channel){ 
                  
                  connection = await msg.member.voice.channel.join();

                  estouPronto = true;
            } else {
                  msg.channel.send('Você precisa estar conectado a um Canal de Voz!');
            }
      }

      else if (msg.content === 'Hatsune Miku leave'){
            if (msg.member.voice.channel){ 
                  msg.member.voice.channel.leave();
                  estouPronto = false;
            } else {
                  msg.channel.send('Você precisa estar conectado a um Canal de Voz!');
            }
      }

      else if (msg.content.startsWith('Hatsune Miku play ')){
            if (estouPronto){
                  let oQueTocar = msg.content.replace('Hatsune Miku play ', '');
                  if (Ytdl.validateURL(oQueTocar)){
                        connection.play(Ytdl(oQueTocar)); 
                  } else {
                        msg.channel.send('Não achei amiguinho')
                  }
            }
      }
});

 
