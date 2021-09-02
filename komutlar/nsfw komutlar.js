const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`🌹`)
.setDescription(`
:droplet: **=**  \`\`//karışık-1\`\` → **karışık resimler atar-1.***

:droplet: **=**  \`\`//karışık-2\`\` → **karışık resimler atar-2.**
`) 
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
.setThumbnail(message.author.avatarURL())
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
.setTimestamp()
message.channel.send(yardım)


};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['nsfw',"nsfw"], 
  permLevel: 0
};

exports.help = {
  name: "nsfw",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'nsfw'
};


//eglence yardım komutu