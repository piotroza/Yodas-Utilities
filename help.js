const fs = require('fs')
const Discord = require('discord.js')

module.exports = {
    name: 'help',
    aliases: ['commands'],
    permissions: [],
    description: 'Sends the bots commands.',
    async execute(client, message) {
        commands = fs.readdirSync('./commands')
        console.log(commands)

        const helpEmbed = new Discord.MessageEmbed()
        .setTitle('Here is a list of all my commands!')
        // .setDescription('These are the commands you can use with me :eyes:')
        // .addField('Ping', 'Sends the bots latency.')
        // .addField('Help', 'Sends the bots commands.')
        // .addField('Ban', 'Bans a member from the server')
        .addField('Here are some of my commands!', `${commands.join("\n").replace(".js",' ')}`)
        .setColor('RANDOM')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp(Date.now())
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
        message.channel.send(helpEmbed)
    }
}