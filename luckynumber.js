module.exports = {
    name: 'luckynumber',
    aliases: ['ln'],
    permissions: [],
    description: 'Shows your lucky number',
    async execute(client, message) {
        const LuckyNumber = Math.floor(Math.random() * 100)

        message.channel.send(`Your lucky number is: \`${LuckyNumber}\``)
    }
}