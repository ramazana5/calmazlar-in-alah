const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "760031594164650005";
	var channelID = "869508234896105473";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin Doğru kullanım: **öneri mesaj**");
	} else {
		
		var embed = new Discord.MessageEmbed()
      .setColor('BLUE')
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.cache.get(guildID).channels.cache.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır Teşekkür ederiz 🤍");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["öner","öneri"], 
  permLevel: 0 
};

exports.help = {
  name: 'öneri', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öneri <mesaj>' 
};

//öneri komutu