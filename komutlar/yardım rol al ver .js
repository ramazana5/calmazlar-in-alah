const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`🀄`)
.setDescription(`


 \`\`//rol-al\`\` → **@rol @kişi yaprak etiketlediginiz kişinin rolünü alırsınız**

 \`\`//rol-ver\`\` → **@rol @kişi yaparak etiketlediginiz kişiye rol verirsiniz**


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
  aliases: ['rol-ver-al',"rol-ver-al"], 
  permLevel: 0
};

exports.help = {
  name: "rol-ver-al",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'rol-ver-al'
};