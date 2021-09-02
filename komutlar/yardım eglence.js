const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`🀄`)
.setDescription(`
:droplet: **=**  \`\`//av\`\` → **avatarınızı gösterir**

:droplet: **=**  \`\`//gby\`\` → **günlük burc yorumu**

:droplet: **=**  \`\`//yazı-tura\`\` → **yazı tura yaparsın**

:droplet: **=**  \`\`//aşk\`\` → **aşk ölçer**

:droplet: **=**  \`\`//kaçcm\`\` → **kaçcm olduguna bakarsınız** 

:droplet: **=**  \`\`//şişe-çevir\`\` → **şişe cevirmece oynarsınız**

:droplet: **=**  \`\`//tkm\`\` → **taş kagıt makas oynarsınız botla**

:droplet: **=**  \`\`//anime\`\` → **girdigin anime isimini size acıklar**
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
  aliases: ['y-eglence',"y-eglence"], 
  permLevel: 0
};

exports.help = {
  name: "y-eglence",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'y-eglence'
};


//eglence yardım komutu