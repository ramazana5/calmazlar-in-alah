const Discord = require("discord.js");
const client = new(require("discord.js").Client)
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')

exports.run = async (client, message, args) => {
  if(!message.member.voice.channel) return message.reply('sese gir')
if(args[0] == 'yt') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})`)
                    embed.setColor('BLUE')
                    embed.setImage("https://cdn.discordapp.com/attachments/878582519182790716/881802760989859880/unknown.png")
                         message.channel.send(embed)
                })
} else {
  const embed = new MessageEmbed()
  embed.setDescription(` dogru kulanım = //ytfilm yt`)//örnek
  embed.setColor('BLUE')
  message.channel.send(embed)
}

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ytfilm","ytfilm yt","yt"],
  permLevel: 0
};

exports.help = {
  name: 'ytfilm yt',
  description: 'Ses kanalında youtube oyun v.s açmanıza yarar',
  usage: 'ytfilm yt'
};