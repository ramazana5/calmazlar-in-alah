const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('BLUE')
.setAuthor(`🀄`)
.setDescription(`
:droplet: **=**  \`//afk\` → **AfK olursunuz**

:droplet: **=**  \`//öneri\` → **fikirlerinizi önerirsiniz**

:droplet: **=**  \`//tag-taraması\` → **sunucudaki kişilerin tag kontorolü yaparsınız**

:droplet: **=**  \`//oylama\` → **oylama yaparsınız**

:droplet: **=**  \`//kes\` → **@üye baglantısını kesersiniz**

:droplet: **=**  \`//sa-as\` → **otamatik sa-as sistemini açar**      

:droplet: **=**  \`//davet\` → **destek sunucumuz ve bot davet etmek için**

:droplet: **=**  \`\`//yt\`\` → ** Sesli kanalda toplu şekilde youtube izlenir** 

:droplet: **=**  \`//sunucubilgi\` → **sunucu hakında bilgi verir**    

:droplet: **=**  \`//hava-durumu\` → **örnek= //hava-durumu isatanbul **    

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
  aliases: ['moderasyon-2',"moderasyon-2"], 
  permLevel: 0
};

exports.help = {
  name: "moderasyon-2",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'moderasyon-2'
};


//eglence yardım komutu