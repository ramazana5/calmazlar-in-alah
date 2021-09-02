const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`🀄`)
.setDescription(`
:droplet: **=**  \`//y-eglence \` 

:droplet: **=**  \`//moderasyon\` 

:droplet: **=**  \`//moderasyon-2\`

:droplet: **=**  \`//y-premium\`  

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
.setImage(`https://cdn.discordapp.com/attachments/878201047997374486/882876875804901436/zng_BOT_GIF.gif`)
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
.setTimestamp()
message.channel.send(yardım)


};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardım',"y"], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};


//komutlar