const { MessageEmbed } = require("discord.js")
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("#303136")
    await channel.send(embed)
}