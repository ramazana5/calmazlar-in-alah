const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
        if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  
  if (message.author.id != "445945772815417345") return message.reply;//SUNUUC SAHİBİNE ÖZEL
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yaz"],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};


//bota mesaj yazdırma 